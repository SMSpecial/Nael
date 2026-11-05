export type Language = 'ar' | 'en';

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  image: string;
  brands: string[];
  warrantyAr: string;
  warrantyEn: string;
  estimatedTimeAr: string;
  estimatedTimeEn: string;
  startingPriceJod: number;
}

export interface UpgradePackage {
  id: string;
  nameAr: string;
  nameEn: string;
  tagAr: string;
  tagEn: string;
  priceJod: number;
  originalPriceJod?: number;
  popular?: boolean;
  timeEstimateAr: string;
  timeEstimateEn: string;
  featuresAr: string[];
  featuresEn: string[];
}

export interface ReviewItem {
  id: string;
  authorAr: string;
  authorEn: string;
  carAr: string;
  carEn: string;
  rating: number;
  dateAr: string;
  dateEn: string;
  commentAr: string;
  commentEn: string;
  source: 'google' | 'facebook';
}

export interface GalleryProject {
  id: string;
  titleAr: string;
  titleEn: string;
  category: 'audio' | 'screens' | 'lighting' | 'tinting' | 'upholstery' | 'protection';
  categoryLabelAr: string;
  categoryLabelEn: string;
  carAr: string;
  carEn: string;
  image: string;
  highlightsAr: string[];
  highlightsEn: string[];
}

export interface EstimatorOption {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'audio' | 'screens' | 'lighting' | 'tinting' | 'security' | 'interior';
  basePriceJod: number;
  durationMinutes: number;
}
