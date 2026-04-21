const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Grid gaps and widths
html = html.replace(/\.grid \{\s+flex: 1;\s+display: flex;\s+gap: 12px;\s+padding-bottom: 16px;/g, 
  '.grid {\n      flex: 1;\n      display: flex;\n      gap: 24px;\n      padding: 0 16px 28px;\n');

html = html.replace(/\.col-regular \{\s+display: flex;\s+gap: 11px;\s+flex-shrink: 0;\s+width: 836px;/g,
  '.col-regular {\n      display: flex;\n      gap: 20px;\n      flex-shrink: 0;\n      width: 856px;');

html = html.replace(/\.col-1 \{\s+flex: 1;\s+display: flex;\s+flex-direction: column;\s+gap: 9px;/g,
  '.col-1 {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      gap: 16px;');

html = html.replace(/\.col-2 \{\s+width: 308px;\s+flex-shrink: 0;\s+display: flex;\s+flex-direction: column;\s+gap: 9px;/g,
  '.col-2 {\n      width: 320px;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n      gap: 16px;');

html = html.replace(/\.col-sections \{\s+flex: 1;\s+display: flex;\s+gap: 12px;/g,
  '.col-sections {\n      flex: 1;\n      display: flex;\n      gap: 24px;');

html = html.replace(/\.col-section \{\s+flex: 1;\s+display: flex;\s+flex-direction: column;\s+border-radius: 16px;\s+overflow: hidden;\s+border: 2px solid rgba\(168, 195, 126, 0\.25\);/g,
  '.col-section {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      border-radius: 28px;\n      overflow: hidden;\n      border: 3px solid rgba(168, 195, 126, 0.4);');

// 2. Section Headers
html = html.replace(/\.section-header \{\s+background: #1a2820;\s+padding: 9px 20px 8px;/g,
  '.section-header {\n      background: #1a2820;\n      padding: 16px 24px 12px;');

html = html.replace(/\.section-header h2 \{\s+font-weight: 900;\s+font-size: 46px;/g,
  '.section-header h2 {\n      font-weight: 900;\n      font-size: 52px;');

html = html.replace(/\.section-cards \{\s+flex: 1;\s+background: #1a2820;\s+display: flex;\s+flex-direction: column;\s+gap: 8px;\s+padding: 0 8px 8px;/g,
  '.section-cards {\n      flex: 1;\n      background: #1a2820;\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n      padding: 0 16px 16px;');

// 3. Card padding and border radius
html = html.replace(/\.card \{\s+flex: 1;\s+background: #EBE5D3;\s+border-radius: 13px;/g,
  '.card {\n      flex: 1;\n      background: #EBE5D3;\n      border-radius: 24px;');

html = html.replace(/\.card-body \{\s+flex: 1;\s+position: relative;\s+padding: 13px 14px 0;/g,
  '.card-body {\n      flex: 1;\n      position: relative;\n      padding: 20px 24px 0;');

html = html.replace(/\.card-footer \{\s+background: #253529;\s+padding: 7px 12px;\s+flex-shrink: 0;\s+border-radius: 0 0 13px 13px;/g,
  '.card-footer {\n      background: #253529;\n      padding: 14px 20px;\n      flex-shrink: 0;\n      border-radius: 0 0 24px 24px;');

html = html.replace(/\.card-footer p \{\s+font-weight: 600;\s+font-size: 12\.5px;/g,
  '.card-footer p {\n      font-weight: 600;\n      font-size: 16px;\n      letter-spacing: 1px;');

// 4. Pricing typography
html = html.replace(/\.price-qualifier \{\s+display: block;\s+font-weight: 600;\s+font-size: 27px;/g,
  '.price-qualifier {\n      display: block;\n      font-weight: 600;\n      font-size: 34px;\n      letter-spacing: -0.5px;\n      margin-bottom: -4px;');

html = html.replace(/\.price-main \{\s+display: block;\s+font-weight: 900;\s+color: #253529;\s+line-height: 0\.88;/g,
  '.price-main {\n      display: block;\n      font-weight: 900;\n      color: #253529;\n      line-height: 0.88;\n      letter-spacing: -3px;');

// 5. Header sizing
html = html.replace(/\.header \{\s+height: 70px;\s+display: flex;\s+align-items: center;\s+justify-content: space-between;\s+padding: 0 4px;/g,
  '.header {\n      height: 90px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 12px 24px 0;');

html = html.replace(/\.qr-logo \{ height: 42px; width: auto; \}/g,
  '.qr-logo { height: 56px; width: auto; }');

html = html.replace(/\.flower-icon \{ width: 40px; height: 40px; \}/g,
  '.flower-icon { width: 52px; height: 52px; }');

html = html.replace(/\.flower-text \{\s+font-weight: 900;\s+font-size: 56px;/g,
  '.flower-text {\n      font-weight: 900;\n      font-size: 72px;');

// Content padding
html = html.replace(/#content \{\s+position: absolute;\s+inset: 0;\s+z-index: 3;\s+display: flex;\s+flex-direction: column;\s+padding: 0 22px;/g,
  '#content {\n      position: absolute;\n      inset: 0;\n      z-index: 3;\n      display: flex;\n      flex-direction: column;\n      padding: 0 32px;');

fs.writeFileSync('index.html', html);
