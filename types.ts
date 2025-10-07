import { Layout } from 'react-grid-layout';

export enum Role {
  CEO = 'CEO',
  Sales = '業務',
  Procurement = '採購',
}

export enum WidgetType {
  KPI_GRID = 'KPI_GRID',
  MAIN_CHART = 'MAIN_CHART',
  PIE_CHART = 'PIE_CHART',
  TOP_LIST = 'TOP_LIST',
  CHAT = 'CHAT',
  CHANGELOG = 'CHANGELOG',
  // CEO new widgets
  GEO_MAP = 'GEO_MAP',
  INITIATIVES_TRACKER = 'INITIATIVES_TRACKER',
  CSAT_SCORE = 'CSAT_SCORE',
  MARKET_SHARE_GAUGE = 'MARKET_SHARE_GAUGE',
  FINANCIAL_HEALTH = 'FINANCIAL_HEALTH',
  HEADCOUNT_CHART = 'HEADCOUNT_CHART',
  COMPETITOR_NEWS = 'COMPETITOR_NEWS',
  INVESTOR_SUMMARY = 'INVESTOR_SUMMARY',
  CUSTOMER_LTV = 'CUSTOMER_LTV',
  // Sales new widgets
  SALES_LEADERBOARD = 'SALES_LEADERBOARD',
  ACTIVITY_FEED = 'ACTIVITY_FEED',
  QUOTA_GAUGE = 'QUOTA_GAUGE',
  WIN_LOSS_CHART = 'WIN_LOSS_CHART',
  CONTRACT_EXPIRATION = 'CONTRACT_EXPIRATION',
  SALES_FUNNEL = 'SALES_FUNNEL',
  // Procurement new widgets
  PO_TRACKER = 'PO_TRACKER',
  SUPPLIER_RISK = 'SUPPLIER_RISK',
  COMPLIANCE_GAUGE = 'COMPLIANCE_GAUGE',
  CYCLE_TIME_CHART = 'CYCLE_TIME_CHART',
  SPEND_VS_BUDGET = 'SPEND_VS_BUDGET',
}


export interface Widget {
  id: string;
  type: WidgetType;
}

export interface DashboardState {
  widgets: Widget[];
  layouts: Layout[];
}

export interface AvailableWidget {
  type: WidgetType;
  name: string;
  defaultW: number;
  defaultH: number;
}


// --- Data Structures ---
export interface ChartData {
  name: string;
  [key: string]: any;
}

export interface GeminiResponse {
  summary: string;
  chartData: ChartData[];
  chartType: 'bar' | 'line';
  dataKey: string;
  xAxisKey: string;
}

export interface KpiData {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

export interface TimeSeriesData {
  month: string;
  [key: string]: number | string;
}

export interface TopProduct {
  id: string;
  name: string;
  value: number;
}

export interface TopSupplier {
  id: string;
  name: string;
  value: number;
}

export interface PieChartData {
  name: string;
  value: number;
}

// New Widget Data Structures
export interface GeoMapData {
  [countryCode: string]: { name: string; value: number };
}

export interface InitiativeData {
  id: string;
  name: string;
  progress: number;
  status: 'on-track' | 'at-risk' | 'delayed';
}

export interface ScoreCardData {
  score: number;
  trend: 'up' | 'down' | 'flat';
}

export interface GaugeData {
  value: number;
  target: number;
  label: string;
}

export interface LeaderboardItem {
  id: string;
  name: string;
  avatar: string;
  value: number;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
}

export interface ContractData {
  id: string;
  name: string;
  client: string;
  expiresInDays: number;
}

export interface PurchaseOrderData {
  id: string;
  supplier: string;
  amount: number;
  status: 'pending' | 'shipped' | 'completed';
}

export interface SupplierRiskData {
  id: string;
  name: string;
  riskLevel: 'low' | 'medium' | 'high';
  spend: number;
}

export interface FinancialHealthData {
  metric: string;
  value: string;
  status: 'healthy' | 'warning' | 'critical';
}

export interface CompetitorNewsData {
  id: string;
  source: string;
  headline: string;
  time: string;
}

export interface InvestorSummaryData {
  stockPrice: number;
  change: number;
  marketCap: string;
  peRatio: number;
  nextEarnings: string;
}

export interface CustomerLtvData {
  ltv: number;
  trend: 'up' | 'down' | 'flat';
  period: string;
}

export interface SalesFunnelData {
  stage: string;
  value: number;
}

export interface SpendVsBudgetData {
  category: string;
  spend: number;
  budget: number;
}

export interface RoleSpecificData {
  kpis: KpiData[];
  mainChart: {
    data: TimeSeriesData[];
    keys: { name: string; color: string }[];
  };
  topList: {
    data: (TopProduct[] | TopSupplier[]);
    valueLabel: string;
  };
  pieChart: {
    data: PieChartData[];
  };
  // Optional new data fields
  geoMap?: GeoMapData;
  initiatives?: InitiativeData[];
  csatScore?: ScoreCardData;
  marketShare?: GaugeData;
  leaderboard?: LeaderboardItem[];
  activityFeed?: ActivityItem[];
  quota?: GaugeData;
  winLoss?: ChartData[];
  contracts?: ContractData[];
  purchaseOrders?: PurchaseOrderData[];
  supplierRisk?: SupplierRiskData[];
  compliance?: GaugeData;
  cycleTime?: ChartData[];
  financialHealth?: FinancialHealthData[];
  headcount?: ChartData[];
  competitorNews?: CompetitorNewsData[];
  investorSummary?: InvestorSummaryData;
  customerLtv?: CustomerLtvData;
  salesFunnel?: SalesFunnelData[];
  spendVsBudget?: SpendVsBudgetData[];
}