import React from 'react';

const changelogData = [
    {
        version: "v2.1.0",
        date: "2024年7月15日",
        changes: [
            { type: "New", text: "為 CEO、業務、採購推出個人化儀表板佈局。" },
            { type: "Improved", text: "圖表互動性增強，新增自定義工具提示與動畫效果。" },
            { type: "Improved", text: "對話式分析現在會根據角色提供情境化問題建議。" },
        ]
    },
    {
        version: "v2.0.0",
        date: "2024年7月1日",
        changes: [
            { type: "New", text: "推出「智慧營運駕駛艙」及對話式分析功能。" },
            { type: "New", text: "整合角色切換功能，模擬不同部門視角。" },
            { type: "Fixed", text: "修正了行動裝置上的顯示問題。" },
        ]
    }
];

const getBadgeColor = (type: string) => {
    switch (type) {
        case "New": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
        case "Improved": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
        case "Fixed": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
        default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
}

const Changelog: React.FC = () => {
  return (
      <div className="h-full overflow-y-auto pr-2 -mr-2">
        <div className="space-y-6">
          {changelogData.map(log => (
            <div key={log.version}>
              <div className="flex items-baseline space-x-3">
                 <h4 className="text-md font-bold text-gray-700 dark:text-gray-200">{log.version}</h4>
                 <p className="text-xs text-gray-400 dark:text-gray-500">{log.date}</p>
              </div>
              <ul className="mt-2 space-y-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                {log.changes.map(change => (
                    <li key={change.text} className="flex items-center">
                       <span className={`text-xs font-medium mr-2 px-2 py-0.5 rounded-full ${getBadgeColor(change.type)}`}>
                           {change.type}
                       </span>
                       <span>{change.text}</span>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Changelog;