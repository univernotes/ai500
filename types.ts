export interface ScoringResult {
  score: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  maxLoanAmount: string;
  ndviAnalysis: string;
  recommendations: string[];
  yieldPrediction: string;
}

export interface TeamMember {
  name: string;
  role: string;
  stack: string;
  image: string;
}

export enum CropType {
  COTTON = 'Хлопок',
  WHEAT = 'Пшеница',
  ORCHARD = 'Сады',
  VEGETABLES = 'Овощи'
}