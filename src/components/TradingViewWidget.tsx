import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // Clear any existing content
    const widgetContainer = container.current.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      widgetContainer.innerHTML = '';
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "backgroundColor": "#ffffff",
      "gridColor": "rgba(46, 46, 46, 0.06)",
      "allow_symbol_change": true,
      "calendar": false,
      "hide_side_toolbar": true,
      "hide_top_toolbar": false,
      "hide_legend": false,
      "hide_volume": false,
      "hotlist": false,
      "save_image": true,
      "withdateranges": false,
      "details": false,
      "watchlist": [],
      "compareSymbols": [],
      "studies": []
    });

    container.current.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (container.current) {
        const scripts = container.current.querySelectorAll('script');
        scripts.forEach(s => s.remove());
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets</span>
        </a>
        <span className="trademark"> on TradingView</span>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
