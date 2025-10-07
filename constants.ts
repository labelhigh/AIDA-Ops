import { Role, DashboardState, RoleSpecificData, AvailableWidget, WidgetType } from './types';

export const WIDGET_DATA: Record<Role, RoleSpecificData> = {
  [Role.CEO]: {
    kpis: [
      { title: '總收入', value: 'NT$10.5M', change: '+12.8%', changeType: 'increase' },
      { title: '總利潤', value: 'NT$5.2M', change: '+9.3%', changeType: 'increase' },
      { title: '新客戶', value: '1,809', change: '-2.1%', changeType: 'decrease' },
      { title: '市場佔有率', value: '15.2%', change: '+0.5%', changeType: 'increase' },
    ],
    mainChart: {
      data: [
        { month: '一月', 營收: 2400, 利潤: 1200 }, { month: '二月', 營收: 1398, 利潤: 800 },
        { month: '三月', 營收: 9800, 利潤: 4500 }, { month: '四月', 營收: 3908, 利潤: 2000 },
        { month: '五月', 營收: 4800, 利潤: 2800 }, { month: '六月', 營收: 3800, 利潤: 1900 },
        { month: '七月', 營收: 4300, 利潤: 2100 },
      ],
      keys: [{ name: '營收', color: '#4f46e5' }, { name: '利潤', color: '#818cf8' }],
    },
    topList: {
      data: [
        { id: 'P001', name: '智慧感測器 Pro', value: 1250 },
        { id: 'P002', name: '企業級自動化套件', value: 980 },
        { id: 'P003', name: '雲端數據平台 (年費)', value: 850 },
        { id: 'P004', name: '物聯網閘道器 v2', value: 730 },
      ],
      valueLabel: '件',
    },
    pieChart: {
      data: [ { name: '直接銷售', value: 45 }, { name: '線上商城', value: 35 }, { name: '合作夥伴', value: 20 } ],
    },
    geoMap: {
      US: { name: '美國', value: 4500000 },
      CN: { name: '中國', value: 2100000 },
      JP: { name: '日本', value: 1500000 },
      DE: { name: '德國', value: 1200000 },
      GB: { name: '英國', value: 950000 },
    },
    initiatives: [
      { id: 'INIT01', name: 'Q3 歐洲市場擴張', progress: 75, status: 'on-track' },
      { id: 'INIT02', name: '新一代 AI 引擎開發', progress: 60, status: 'on-track' },
      { id: 'INIT03', name: '供應鏈成本優化專案', progress: 90, status: 'at-risk' },
      { id: 'INIT04', name: '客戶成功計畫', progress: 40, status: 'delayed' },
    ],
    csatScore: { score: 4.6, trend: 'up' },
    marketShare: { value: 15.2, target: 20, label: '市場份額' },
    financialHealth: [
        { metric: '速動比率', value: '1.8', status: 'healthy' },
        { metric: '負債權益比', value: '0.6', status: 'healthy' },
        { metric: '營運現金流', value: 'NT$2.1M', status: 'warning' },
    ],
    headcount: [
        { name: '研發', value: 85 }, { name: '銷售', value: 62 }, { name: '營運', value: 45 }, { name: '行政', value: 22 },
    ],
    competitorNews: [
        { id: 'N1', source: 'TechCrunch', headline: '競爭對手 A 宣布完成 5000 萬美元 B 輪融資', time: '3 小時前' },
        { id: 'N2', source: '路透社', headline: '競爭對手 B 發布新款 AI 晶片，性能提升 30%', time: '昨天' },
    ],
    investorSummary: { stockPrice: 150.25, change: 2.75, marketCap: 'NT$250B', peRatio: 35.2, nextEarnings: '2024-08-15' },
    customerLtv: { ltv: 25800, trend: 'up', period: '過去 12 個月' },
  },
  [Role.Sales]: {
    kpis: [
      { title: '個人業績', value: 'NT$850K', change: '+15.2%', changeType: 'increase' },
      { title: '成交筆數', value: '128', change: '+5', changeType: 'increase' },
      { title: '客戶轉換率', value: '25%', change: '+1.8%', changeType: 'increase' },
      { title: '平均訂單金額', value: 'NT$6,640', change: '-3.1%', changeType: 'decrease' },
    ],
    mainChart: {
      data: [
        { month: '一月', 成交量: 20, 潛在客戶: 80 }, { month: '二月', 成交量: 15, 潛在客戶: 65 },
        { month: '三月', 成交量: 35, 潛在客戶: 120 }, { month: '四月', 成交量: 25, 潛在客戶: 90 },
        { month: '五月', 成交量: 28, 潛在客戶: 105 }, { month: '六月', 成交量: 22, 潛在客戶: 85 },
        { month: '七月', 成交量: 31, 潛在客戶: 110 },
      ],
      keys: [{ name: '成交量', color: '#10b981' }, { name: '潛在客戶', color: '#a7f3d0' }],
    },
    topList: {
      data: [
          { id: 'C021', name: '頂尖製造公司', value: 250000 },
          { id: 'C009', name: '環球物流集團', value: 180000 },
          { id: 'C102', name: '創新科技實業', value: 150000 },
          { id: 'C055', name: '亞洲金融控股', value: 120000 },
      ],
      valueLabel: 'NT$',
    },
    pieChart: {
      data: [ { name: '初期接觸', value: 30 }, { name: '提案報價', value: 40 }, { name: '合約擬定', value: 20 }, { name: '即將成交', value: 10 } ],
    },
    leaderboard: [
        { id: 'U001', name: '陳大文', avatar: 'M', value: 850000 },
        { id: 'U002', name: '林美麗', avatar: 'F', value: 790000 },
        { id: 'U003', name: '黃小強', avatar: 'M', value: 760000 },
        { id: 'U004', name: '張艾嘉', avatar: 'F', value: 710000 },
    ],
    activityFeed: [
        { id: 'A01', user: '陳大文', action: '新增了會議紀錄', target: '頂尖製造公司', time: '2 小時前' },
        { id: 'A02', user: '林美麗', action: '發送了報價單', target: '環球物流集團', time: '5 小時前' },
        { id: 'A03', user: '黃小強', action: '更新了聯絡人', target: '創新科技實業', time: '昨天' },
    ],
    quota: { value: 850, target: 1000, label: '千元' },
    winLoss: [ { name: '價格太高', value: 12 }, { name: '功能不符', value: 8 }, { name: '時程延遲', value: 5 } ],
    contracts: [
        { id: 'CTR-001', name: '年度服務合約', client: '亞洲金融控股', expiresInDays: 25 },
        { id: 'CTR-002', name: '產品採購合約', client: '未來能源公司', expiresInDays: 65 },
        { id: 'CTR-003', name: '軟體授權協議', client: '智慧醫療集團', expiresInDays: 8 },
    ],
    salesFunnel: [
        { stage: '潛在客戶', value: 1500 },
        { stage: '合格潛客', value: 800 },
        { stage: '提案報價', value: 450 },
        { stage: '合約擬定', value: 200 },
        { stage: '成交', value: 128 },
    ],
  },
  [Role.Procurement]: {
    kpis: [
      { title: '總採購支出', value: 'NT$2.1M', change: '-5.7%', changeType: 'decrease' },
      { title: '成本節省', value: 'NT$120K', change: '+22%', changeType: 'increase' },
      { title: '採購訂單 (PO)', value: '315', change: '+12', changeType: 'increase' },
      { title: '供應商準時率', value: '96.8%', change: '+0.2%', changeType: 'increase' },
    ],
    mainChart: {
      data: [
        { month: '一月', 支出: 400, 節省: 20 }, { month: '二月', 支出: 300, 節省: 15 },
        { month: '三月', 支出: 500, 節省: 30 }, { month: '四月', 支出: 450, 節省: 25 },
        { month: '五月', 支出: 380, 節省: 18 }, { month: '六月', 支出: 420, 節省: 22 },
        { month: '七月', 支出: 350, 節省: 28 },
      ],
      keys: [{ name: '支出', color: '#f97316' }, { name: '節省', color: '#fdba74' }],
    },
    topList: {
      data: [
          { id: 'S001', name: '核心晶片供應商', value: 850000 },
          { id: 'S002', name: '精密外殼製造廠', value: 620000 },
          { id: 'S003', name: '全球物流夥伴', value: 410000 },
          { id: 'S004', name: '雲端服務提供商', value: 350000 },
      ],
      valueLabel: 'NT$',
    },
    pieChart: {
      data: [ { name: '電子元件', value: 50 }, { name: '結構件', value: 25 }, { name: '物流與服務', value: 15 }, { name: '軟體授權', value: 10 } ],
    },
    purchaseOrders: [
        { id: 'PO-7781', supplier: '核心晶片供應商', amount: 150000, status: 'shipped' },
        { id: 'PO-7782', supplier: '精密外殼製造廠', amount: 85000, status: 'completed' },
        { id: 'PO-7783', supplier: '通用五金實業', amount: 42000, status: 'pending' },
    ],
    supplierRisk: [
        { id: 'S002', name: '精密外殼製造廠', riskLevel: 'high', spend: 620000 },
        { id: 'S001', name: '核心晶片供應商', riskLevel: 'low', spend: 850000 },
        { id: 'S005', name: '備用電池模組廠', riskLevel: 'medium', spend: 120000 },
    ],
    compliance: { value: 92, target: 95, label: '合規率' },
    cycleTime: [ { name: '發票接收', value: 2 }, { name: '內部審批', value: 5 }, { name: '財務付款', value: 3 } ],
    contracts: [ // Re-using contract data for procurement
        { id: 'CTR-S01', name: '年度晶片採購', client: '核心晶片供應商', expiresInDays: 45 },
        { id: 'CTR-S02', name: '物流服務合約', client: '全球物流夥伴', expiresInDays: 120 },
        { id: 'CTR-S03', name: '雲端服務協議', client: '雲端服務提供商', expiresInDays: 15 },
    ],
    spendVsBudget: [
        { category: '電子元件', spend: 1200000, budget: 1100000 },
        { category: '結構件', spend: 750000, budget: 800000 },
        { category: '物流服務', spend: 410000, budget: 450000 },
        { category: '軟體授權', spend: 350000, budget: 350000 },
    ],
  }
};

export const AVAILABLE_WIDGETS: Record<Role, AvailableWidget[]> = {
  [Role.CEO]: [
    { type: WidgetType.KPI_GRID, name: '關鍵指標', defaultW: 12, defaultH: 4 },
    { type: WidgetType.MAIN_CHART, name: '整體營收與利潤趨勢', defaultW: 8, defaultH: 9 },
    { type: WidgetType.PIE_CHART, name: '通路銷售佔比', defaultW: 4, defaultH: 9 },
    { type: WidgetType.TOP_LIST, name: '熱銷產品排行榜', defaultW: 7, defaultH: 8 },
    { type: WidgetType.CHAT, name: '對話式分析', defaultW: 12, defaultH: 12 },
    { type: WidgetType.CHANGELOG, name: '平台更新日誌', defaultW: 5, defaultH: 8 },
    { type: WidgetType.GEO_MAP, name: '全球營收地圖', defaultW: 7, defaultH: 9 },
    { type: WidgetType.INITIATIVES_TRACKER, name: '關鍵目標追蹤', defaultW: 5, defaultH: 9 },
    { type: WidgetType.CSAT_SCORE, name: '顧客滿意度 (CSAT)', defaultW: 4, defaultH: 5 },
    { type: WidgetType.MARKET_SHARE_GAUGE, name: '市場佔有率', defaultW: 4, defaultH: 5 },
    { type: WidgetType.FINANCIAL_HEALTH, name: '財務健康度', defaultW: 5, defaultH: 7 },
    { type: WidgetType.HEADCOUNT_CHART, name: '員工人數分佈', defaultW: 7, defaultH: 7 },
    { type: WidgetType.COMPETITOR_NEWS, name: '競爭對手動態', defaultW: 6, defaultH: 8 },
    { type: WidgetType.INVESTOR_SUMMARY, name: '投資者關係摘要', defaultW: 6, defaultH: 8 },
    { type: WidgetType.CUSTOMER_LTV, name: '客戶終身價值 (LTV)', defaultW: 4, defaultH: 5 },
  ],
  [Role.Sales]: [
    { type: WidgetType.KPI_GRID, name: '業績指標', defaultW: 12, defaultH: 4 },
    { type: WidgetType.MAIN_CHART, name: '每月成交趨勢', defaultW: 7, defaultH: 10 },
    { type: WidgetType.TOP_LIST, name: '我的高價值客戶', defaultW: 5, defaultH: 10 },
    { type: WidgetType.CHAT, name: '銷售助理', defaultW: 7, defaultH: 10 },
    { type: WidgetType.PIE_CHART, name: '銷售階段分佈', defaultW: 5, defaultH: 10 },
    { type: WidgetType.SALES_LEADERBOARD, name: '銷售排行榜', defaultW: 5, defaultH: 9 },
    { type: WidgetType.ACTIVITY_FEED, name: '客戶活動摘要', defaultW: 7, defaultH: 9 },
    { type: WidgetType.QUOTA_GAUGE, name: '業績目標達成率', defaultW: 4, defaultH: 6 },
    { type: WidgetType.WIN_LOSS_CHART, name: '商機丟失原因分析', defaultW: 8, defaultH: 6 },
    { type: WidgetType.CONTRACT_EXPIRATION, name: '合約到期提醒', defaultW: 12, defaultH: 6 },
    { type: WidgetType.SALES_FUNNEL, name: '銷售漏斗', defaultW: 6, defaultH: 9 },
  ],
  [Role.Procurement]: [
    { type: WidgetType.KPI_GRID, name: '採購指標', defaultW: 12, defaultH: 4 },
    { type: WidgetType.TOP_LIST, name: '主要供應商支出', defaultW: 7, defaultH: 9 },
    { type: WidgetType.PIE_CHART, name: '採購類別佔比', defaultW: 5, defaultH: 9 },
    { type: WidgetType.MAIN_CHART, name: '每月採購支出', defaultW: 7, defaultH: 10 },
    { type: WidgetType.CHAT, name: '採購顧問', defaultW: 5, defaultH: 10 },
    { type: WidgetType.PO_TRACKER, name: '採購訂單追蹤', defaultW: 6, defaultH: 8 },
    { type: WidgetType.SUPPLIER_RISK, name: '供應商風險評估', defaultW: 6, defaultH: 8 },
    { type: WidgetType.COMPLIANCE_GAUGE, name: '採購合規性', defaultW: 4, defaultH: 6 },
    { type: WidgetType.CYCLE_TIME_CHART, name: '發票處理週期', defaultW: 8, defaultH: 6 },
    { type: WidgetType.CONTRACT_EXPIRATION, name: '供應商合約提醒', defaultW: 12, defaultH: 6 },
    { type: WidgetType.SPEND_VS_BUDGET, name: '支出與預算對比', defaultW: 8, defaultH: 8 },
  ],
};


export const DEFAULT_DASHBOARDS: Record<Role, DashboardState> = {
  [Role.CEO]: {
    widgets: [
      { id: 'kpi-1', type: WidgetType.KPI_GRID },
      { id: 'main-chart-1', type: WidgetType.MAIN_CHART },
      { id: 'pie-chart-1', type: WidgetType.PIE_CHART },
      { id: 'chat-1', type: WidgetType.CHAT },
      { id: 'top-list-1', type: WidgetType.TOP_LIST },
      { id: 'changelog-1', type: WidgetType.CHANGELOG },
    ],
    layouts: [
      { i: 'kpi-1', x: 0, y: 0, w: 12, h: 4, minW: 8, minH: 4 },
      { i: 'main-chart-1', x: 0, y: 4, w: 8, h: 9, minW: 6, minH: 8 },
      { i: 'pie-chart-1', x: 8, y: 4, w: 4, h: 9, minW: 3, minH: 8 },
      { i: 'chat-1', x: 0, y: 13, w: 12, h: 12, minW: 6, minH: 10 },
      { i: 'top-list-1', x: 0, y: 25, w: 7, h: 8, minW: 5, minH: 7 },
      { i: 'changelog-1', x: 7, y: 25, w: 5, h: 8, minW: 4, minH: 7 },
    ],
  },
  [Role.Sales]: {
    widgets: [
      { id: 'kpi-2', type: WidgetType.KPI_GRID },
      { id: 'main-chart-2', type: WidgetType.MAIN_CHART },
      { id: 'top-list-2', type: WidgetType.TOP_LIST },
      { id: 'chat-2', type: WidgetType.CHAT },
      { id: 'pie-chart-2', type: WidgetType.PIE_CHART },
    ],
    layouts: [
      { i: 'kpi-2', x: 0, y: 0, w: 12, h: 4, minW: 8, minH: 4 },
      { i: 'main-chart-2', x: 0, y: 4, w: 7, h: 10, minW: 5, minH: 8 },
      { i: 'top-list-2', x: 7, y: 4, w: 5, h: 10, minW: 4, minH: 8 },
      { i: 'chat-2', x: 0, y: 14, w: 7, h: 10, minW: 5, minH: 8 },
      { i: 'pie-chart-2', x: 7, y: 14, w: 5, h: 10, minW: 4, minH: 8 },
    ],
  },
  [Role.Procurement]: {
    widgets: [
        { id: 'kpi-3', type: WidgetType.KPI_GRID },
        { id: 'top-list-3', type: WidgetType.TOP_LIST },
        { id: 'pie-chart-3', type: WidgetType.PIE_CHART },
        { id: 'main-chart-3', type: WidgetType.MAIN_CHART },
        { id: 'chat-3', type: WidgetType.CHAT },
    ],
    layouts: [
        { i: 'kpi-3', x: 0, y: 0, w: 12, h: 4, minW: 8, minH: 4 },
        { i: 'top-list-3', x: 0, y: 4, w: 7, h: 9, minW: 5, minH: 8 },
        { i: 'pie-chart-3', x: 7, y: 4, w: 5, h: 9, minW: 4, minH: 8 },
        { i: 'main-chart-3', x: 0, y: 13, w: 7, h: 10, minW: 5, minH: 8 },
        { i: 'chat-3', x: 7, y: 13, w: 5, h: 10, minW: 4, minH: 8 },
    ],
  }
};


export const ROLE_SPECIFIC_QUERIES: Record<Role, string[]> = {
  [Role.CEO]: [
    "比較上一季各產品線的銷售額。",
    "哪些產品的利潤率最高？",
    "預測下個季度的現金流。",
  ],
  [Role.Sales]: [
    "找出最近 30 天內有流失風險的客戶。",
    "我最有潛力的潛在客戶是誰？",
    "哪些產品經常被一起購買？",
  ],
  [Role.Procurement]: [
    "哪些供應商的交貨延遲風險最高？",
    "分析主要原料的價格波動趨勢。",
    "找出可以進行成本優化的採購項目。",
  ],
};