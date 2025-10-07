import React from 'react';
import { Widget, WidgetType, Role, RoleSpecificData } from '../../types';

import KpiGridWidget from './KpiGridWidget';
import MainChartWidget from './MainChartWidget';
import PieChartWidget from './PieChartWidget';
import TopListWidget from './TopListWidget';
import ChatWidget from './ChatWidget';
import ChangelogWidget from './ChangelogWidget';
import GeoMapWidget from './GeoMapWidget';
import InitiativesTrackerWidget from './InitiativesTrackerWidget';
import ScoreCardWidget from './ScoreCardWidget';
import GaugeWidget from './GaugeWidget';
import LeaderboardWidget from './LeaderboardWidget';
import ActivityFeedWidget from './ActivityFeedWidget';
import SimpleBarChartWidget from './SimpleBarChartWidget';
import ContractListWidget from './ContractListWidget';
import RecentPoWidget from './RecentPoWidget';
import SupplierRiskWidget from './SupplierRiskWidget';
import FinancialHealthWidget from './FinancialHealthWidget';
import HeadcountChartWidget from './HeadcountChartWidget';
import CompetitorNewsWidget from './CompetitorNewsWidget';
import InvestorSummaryWidget from './InvestorSummaryWidget';
import CustomerLtvWidget from './CustomerLtvWidget';
import SalesFunnelWidget from './SalesFunnelWidget';
import SpendVsBudgetWidget from './SpendVsBudgetWidget';

interface WidgetRendererProps {
  widget: Widget;
  role: Role;
  roleData: RoleSpecificData;
  isEditing: boolean;
  widgetName: string;
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget, role, roleData, isEditing, widgetName }) => {
  const commonProps = {
    isEditing,
    widgetName
  };

  switch (widget.type) {
    case WidgetType.KPI_GRID:
      return <KpiGridWidget {...commonProps} data={roleData.kpis} />;
    case WidgetType.MAIN_CHART:
      return <MainChartWidget {...commonProps} data={roleData.mainChart} />;
    case WidgetType.PIE_CHART:
      return <PieChartWidget {...commonProps} data={roleData.pieChart} role={role} />;
    case WidgetType.TOP_LIST:
      return <TopListWidget {...commonProps} data={roleData.topList} role={role} />;
    case WidgetType.CHAT:
      return <ChatWidget {...commonProps} role={role} />;
    case WidgetType.CHANGELOG:
      return <ChangelogWidget {...commonProps} />;
    
    // CEO Widgets
    case WidgetType.GEO_MAP:
        return <GeoMapWidget {...commonProps} data={roleData.geoMap} />;
    case WidgetType.INITIATIVES_TRACKER:
        return <InitiativesTrackerWidget {...commonProps} data={roleData.initiatives} />;
    case WidgetType.CSAT_SCORE:
        return <ScoreCardWidget {...commonProps} data={roleData.csatScore} />;
    case WidgetType.MARKET_SHARE_GAUGE:
        return <GaugeWidget {...commonProps} data={roleData.marketShare} />;
    case WidgetType.FINANCIAL_HEALTH:
        return <FinancialHealthWidget {...commonProps} data={roleData.financialHealth} />;
    case WidgetType.HEADCOUNT_CHART:
        return <HeadcountChartWidget {...commonProps} data={roleData.headcount} />;
    case WidgetType.COMPETITOR_NEWS:
        return <CompetitorNewsWidget {...commonProps} data={roleData.competitorNews} />;
    case WidgetType.INVESTOR_SUMMARY:
        return <InvestorSummaryWidget {...commonProps} data={roleData.investorSummary} />;
    case WidgetType.CUSTOMER_LTV:
        return <CustomerLtvWidget {...commonProps} data={roleData.customerLtv} />;

    // Sales Widgets
    case WidgetType.SALES_LEADERBOARD:
        return <LeaderboardWidget {...commonProps} data={roleData.leaderboard} />;
    case WidgetType.ACTIVITY_FEED:
        return <ActivityFeedWidget {...commonProps} data={roleData.activityFeed} />;
    case WidgetType.QUOTA_GAUGE:
        return <GaugeWidget {...commonProps} data={roleData.quota} />;
    case WidgetType.WIN_LOSS_CHART:
        return <SimpleBarChartWidget {...commonProps} data={roleData.winLoss} color="#10b981" />;
    case WidgetType.CONTRACT_EXPIRATION:
        return <ContractListWidget {...commonProps} data={roleData.contracts} />;
    case WidgetType.SALES_FUNNEL:
        return <SalesFunnelWidget {...commonProps} data={roleData.salesFunnel} />;


    // Procurement Widgets
    case WidgetType.PO_TRACKER:
        return <RecentPoWidget {...commonProps} data={roleData.purchaseOrders} />;
    case WidgetType.SUPPLIER_RISK:
        return <SupplierRiskWidget {...commonProps} data={roleData.supplierRisk} />;
    case WidgetType.COMPLIANCE_GAUGE:
        return <GaugeWidget {...commonProps} data={roleData.compliance} />;
    case WidgetType.CYCLE_TIME_CHART:
        return <SimpleBarChartWidget {...commonProps} data={roleData.cycleTime} color="#f97316" />;
    case WidgetType.SPEND_VS_BUDGET:
        return <SpendVsBudgetWidget {...commonProps} data={roleData.spendVsBudget} />;


    default:
      return <div className="p-4">未知的卡片類型: {widget.type}</div>;
  }
};

export default WidgetRenderer;