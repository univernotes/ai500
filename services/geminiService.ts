import { GoogleGenAI, Type } from "@google/genai";
import { ScoringResult } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeCreditRisk = async (
  region: string,
  cropType: string,
  landSize: number,
  experience: number
): Promise<ScoringResult> => {
  
  // If no API key is present (e.g. initial load or not set), return mock data for demo purposes
  if (!apiKey) {
    console.warn("No API Key found, returning mock data");
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
    return {
      score: 785,
      riskLevel: 'Low',
      maxLoanAmount: '45,000,000 UZS',
      ndviAnalysis: 'Спутниковые данные показывают высокий индекс вегетации (0.72). Поле обрабатывается равномерно.',
      yieldPrediction: 'Прогнозируемая урожайность выше средней по региону на 12%.',
      recommendations: [
        'Рекомендуется оформить микрозайм на удобрения.',
        'Пройдите курс по капельному орошению в Agrobooks для повышения балла.'
      ]
    };
  }

  try {
    const prompt = `
      Act as a fintech AI risk analyst for Agrobank in Uzbekistan.
      Analyze a farmer with the following data:
      - Region: ${region}
      - Crop: ${cropType}
      - Land Size: ${landSize} hectares
      - Experience: ${experience} years.

      Simulate a satellite analysis (NDVI) and alternative data check.
      Return a JSON object with:
      - score (integer 300-900)
      - riskLevel (Low, Medium, or High)
      - maxLoanAmount (in UZS, formatted string)
      - ndviAnalysis (short sentence describing crop health from space)
      - yieldPrediction (short sentence)
      - recommendations (array of 2 strings)
      
      Be realistic but optimistic for good inputs.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER },
            riskLevel: { type: Type.STRING, enum: ['Low', 'Medium', 'High'] },
            maxLoanAmount: { type: Type.STRING },
            ndviAnalysis: { type: Type.STRING },
            yieldPrediction: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result as ScoringResult;

  } catch (error) {
    console.error("AI Analysis failed:", error);
    // Fallback in case of error
    return {
      score: 650,
      riskLevel: 'Medium',
      maxLoanAmount: '20,000,000 UZS',
      ndviAnalysis: 'Данные спутника частично недоступны из-за облачности. Используются исторические данные.',
      yieldPrediction: 'Средняя ожидаемая урожайность.',
      recommendations: ['Обновите данные кадастра.', 'Предоставьте историю коммунальных платежей.']
    };
  }
};