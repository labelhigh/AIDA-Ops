import { GeminiResponse } from "../types";

// 預先生成的模擬 AI 回應數據
const MOCK_RESPONSES: Record<string, GeminiResponse> = {
  "比較上一季各產品線的銷售額。": {
    summary: "上一季，「智慧感測器」產品線以 NT$1,200,000 的銷售額領先，而「雲端數據平台」則展現出最強勁的增長趨勢，季增長率達到 25%。",
    chartData: [
      { name: '智慧感測器', value: 1200000 },
      { name: '自動化套件', value: 850000 },
      { name: '雲端數據平台', value: 950000 },
      { name: '物聯網閘道器', value: 650000 }
    ],
    chartType: 'bar',
    dataKey: 'value',
    xAxisKey: 'name'
  },
  "哪些產品的利潤率最高？": {
    summary: "「雲端數據平台」的利潤率最高，達到 65%，這主要歸功於其較低的邊際成本。「自動化套件」雖然銷售額不錯，但利潤率僅為 40%，建議進行成本分析。",
    chartData: [
      { name: '雲端數據平台', value: 65 },
      { name: '智慧感測器', value: 55 },
      { name: '物聯網閘道器', value: 48 },
      { name: '自動化套件', value: 40 }
    ],
    chartType: 'bar',
    dataKey: 'value',
    xAxisKey: 'name'
  },
  "預測下個季度的現金流。": {
    summary: "基於目前的應收帳款和銷售預測，下個季度預計將有 NT$3.5M 的正現金流入。然而，考慮到即將支付的 NT$1.2M 供應商款項，建議保持至少 NT$500K 的現金儲備。",
    chartData: [
      { name: '預期流入', value: 3500000 },
      { name: '預期流出', value: 1800000 },
      { name: '供應商款項', value: 1200000 },
      { name: '營運費用', value: 600000 }
    ],
    chartType: 'bar',
    dataKey: 'value',
    xAxisKey: 'name'
  },
  "哪些供應商的交貨延遲風險最高？": {
    summary: "數據分析顯示，「精密外殼製造廠」在過去六個月中的延遲率為 15%，風險最高。建議與其溝通，或考慮將部分訂單轉移給備用供應商「通用五金實業」。",
    chartData: [
        { name: '精密外殼製造廠', value: 15 },
        { name: '核心晶片供應商', value: 5 },
        { name: '全球物流夥伴', value: 2 },
        { name: '雲端服務提供商', value: 0 },
    ],
    chartType: 'bar',
    dataKey: 'value',
    xAxisKey: 'name'
  },
  "分析主要原料的價格波動趨勢。": {
    summary: "過去一年中，核心晶片的價格呈現穩定上漲趨勢，平均每季上漲 3.5%。而精密外殼的原料價格則相對穩定。建議針對晶片進行策略性備貨或簽訂長期合約以鎖定價格。",
    chartData: [
      { name: '第一季', '晶片價格': 100, '外殼價格': 50 },
      { name: '第二季', '晶片價格': 104, '外殼價格': 51 },
      { name: '第三季', '晶片價格': 107, '外殼價格': 50 },
      { name: '第四季', '晶片價格': 111, '外殼價格': 52 },
    ],
    chartType: 'line',
    dataKey: '晶片價格', // Example, this would need more complex handling for multiple lines
    xAxisKey: 'name'
  }
};

const FALLBACK_RESPONSE: GeminiResponse = {
    summary: "抱歉，這個問題超出了目前概念展示的範圍。請嘗試點擊下方的建議問題之一，以體驗對話式分析功能。",
    chartData: [],
    chartType: 'bar',
    dataKey: 'value',
    xAxisKey: 'name'
};

/**
 * 模擬獲取商業洞察的函數。
 * 它會根據輸入的提示詞從預定義的模擬數據中查找回應。
 * @param prompt 使用者的業務問題。
 * @returns 一個解析為 GeminiResponse 的 Promise。
 */
export const getBusinessInsight = async (prompt: string): Promise<GeminiResponse> => {
  console.log(`正在為提示生成模擬回應: "${prompt}"`);

  return new Promise((resolve) => {
    // 模擬 800ms 的網路延遲，讓體驗更真實
    setTimeout(() => {
      const response = MOCK_RESPONSES[prompt.trim()] || FALLBACK_RESPONSE;
      resolve(response);
    }, 800);
  });
};