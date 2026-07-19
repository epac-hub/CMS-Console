
function renderCircularityCharts(){const MG="#2c5f4b",DK="#1a2e25",RED="#c0392b",ACC="#e8b931",BL="#2980b9";const cL={paper_bgcolor:"white",plot_bgcolor:"white",font:{color:"#3a3a3a",family:"Inter,sans-serif",size:12},margin:{t:20,l:60,r:20,b:50},hovermode:"x unified",xaxis:{gridcolor:"#ebe8e0",linecolor:"#d8d4c8"},yaxis:{gridcolor:"#ebe8e0",linecolor:"#d8d4c8"}};const cC={displaylogo:false,responsive:true};const wY=["2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023"];Plotly.newPlot("chartWageIndex",[{x:wY,y:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],name:"US National",mode:"lines+text",line:{color:DK,width:2,dash:"dash"},text:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(v=>"1.00"),textposition:"top center",textfont:{color:DK,size:9,family:"JetBrains Mono"},hovertemplate:"<b>US: %{y:.2f}</b><br>Baseline<extra></extra>"},{x:wY,y:[.70,.74,.80,.75,.72,.71,.71,.76,.76,.67,.74,.70,.70,.55,.60],name:"USVI",mode:"lines+markers+text",line:{color:BL,width:2},marker:{size:5},text:[.70,.74,.80,.75,.72,.71,.71,.76,.76,.67,.74,.70,.70,.55,.60].map(v=>v.toFixed(2)),textposition:"top center",textfont:{color:BL,size:9,family:"JetBrains Mono"},hovertemplate:"<b>USVI: %{y:.2f}</b><extra></extra>"},{x:wY,y:[.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40],name:"Puerto Rico",mode:"lines+markers+text",line:{color:RED,width:3},marker:{size:6},fill:"tozeroy",fillcolor:"rgba(192,57,43,0.08)",text:[.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40,.40].map(v=>v.toFixed(2)),textposition:"bottom center",textfont:{color:RED,size:9,family:"JetBrains Mono"},hovertemplate:"<b>PR: %{y:.2f}</b><br>Frozen 15 years<extra></extra>"}],{...cL,yaxis:{...cL.yaxis,title:"Wage Index",range:[0,1.15],tickformat:".1f"},xaxis:{...cL.xaxis,title:"Federal Fiscal Year"}},cC);const oL=["Food Prep","Personal Care","Farming","Life/Phys Sci","Architecture","Management","Bldg/Grounds","Office/Admin","Legal","Production","Community Svc","Transportation","Arts","Protective","ALL OCCUPATIONS","Sales","Install/Repair","Business/Fin","Computer/Math","Construction","HC Support","HC Practitioners","Hospital Staff","CMS Wage Index"];const oV=[.68,.63,.62,.62,.62,.60,.60,.57,.56,.56,.55,.55,.54,.52,.52,.52,.51,.45,.42,.42,.59,.42,.38,.40];Plotly.newPlot("chartOccupations",[{y:oL,x:oV,type:"bar",orientation:"h",marker:{color:oL.map((l,i)=>l==="CMS Wage Index"?ACC:l==="ALL OCCUPATIONS"?DK:i>=20?RED:MG)},text:oV.map(v=>v.toFixed(2)),textposition:"outside",textfont:{size:11,family:"JetBrains Mono"},hovertemplate:"<b>%{y}</b>: %{x:.2f}<extra></extra>"}],{...cL,margin:{t:10,l:140,r:50,b:40},yaxis:{...cL.yaxis,autorange:"reversed",tickfont:{size:10}},xaxis:{...cL.xaxis,title:"PR/US Ratio",range:[0,.82]},showlegend:false,shapes:[{type:"line",x0:.40,x1:.40,y0:-.5,y1:23.5,line:{color:ACC,width:2,dash:"dash"}}]},cC);Plotly.newPlot("chartSalaryBar",[{x:["Puerto Rico","USVI","United States"],y:[33792,48832,89002],type:"bar",marker:{color:[RED,BL,DK]},text:["$33,792","$48,832","$89,002"],textposition:"outside",textfont:{size:13,family:"JetBrains Mono"},hovertemplate:"%{x}: $%{y:,.0f}/yr<extra></extra>"}],{...cL,yaxis:{...cL.yaxis,title:"Avg Annual Salary",tickformat:"$,.0f",range:[0,105000]},showlegend:false},cC);Plotly.newPlot("chartInsurance",[{x:["Medicare","Medicaid","Combined"],y:[22.7,38.8,61.5],name:"Puerto Rico",type:"bar",marker:{color:RED},text:["22.7%","38.8%","61.5%"],textposition:"outside",textfont:{size:11,color:RED},hovertemplate:"PR %{x}: %{y:.1f}%<extra></extra>"},{x:["Medicare","Medicaid","Combined"],y:[14.6,21.2,35.8],name:"United States",type:"bar",marker:{color:DK},text:["14.6%","21.2%","35.8%"],textposition:"outside",textfont:{size:11,color:DK},hovertemplate:"US %{x}: %{y:.1f}%<extra></extra>"}],{...cL,barmode:"group",yaxis:{...cL.yaxis,title:"% of Population",ticksuffix:"%",range:[0,72]}},cC);const sY=["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];Plotly.newPlot("chartSalaryIndex",[{x:sY,y:[100,104.8,110.7,111,109.6,111.9,117.2,119,130.1,139.6,140],name:"USVI",mode:"lines+markers+text",line:{color:BL,width:2},marker:{size:5},hovertemplate:"USVI: %{y:.1f}<extra></extra>"},{x:sY,y:[100,98.9,101,104.2,105.6,108.1,110.8,114.1,121.3,127.9,134.5],name:"US",mode:"lines+markers+text",line:{color:DK,width:2},marker:{size:5},text:["100","","","","","","","","","","134.5"],textposition:"top center",textfont:{color:DK,size:9,family:"JetBrains Mono"},hovertemplate:"US: %{y:.1f}<extra></extra>"},{x:sY,y:[100,100.9,102.8,103.5,104.5,103.7,108.1,109.6,113.2,117,123.2],name:"PR",mode:"lines+markers+text",line:{color:RED,width:3},marker:{size:6},fill:"tozeroy",fillcolor:"rgba(192,57,43,.06)",text:["100","","","","","","","","","","123.2"],textposition:"bottom center",textfont:{color:RED,size:10,family:"JetBrains Mono"},hovertemplate:"PR: %{y:.1f}<extra></extra>"}],{...cL,yaxis:{...cL.yaxis,title:"Index (2012=100)",range:[93,150]},xaxis:{...cL.xaxis,title:"Year"}},cC);const spL=["Thoracic Surg","Preventive Med","Family Med/GP","Pediatrics","Ortho Surg","Pulmonary","OB/GYN","Urology","Psychiatry","Radiation Onc","Cardiovascular","General Surg","Otolaryngology"];const spV=[87,85,66,63,57,57,55,54,53,53,53,52,50];Plotly.newPlot("chartPhysAge",[{y:spL,x:spV,type:"bar",orientation:"h",marker:{color:spV.map(v=>v>=65?RED:v>=55?"#d68910":MG)},text:spV.map(v=>v+"%"),textposition:"outside",textfont:{size:12,family:"JetBrains Mono"},hovertemplate:"%{y}: %{x}% age 60+<extra></extra>"}],{...cL,margin:{t:10,l:130,r:50,b:40},yaxis:{...cL.yaxis,autorange:"reversed",tickfont:{size:11}},xaxis:{...cL.xaxis,title:"% Physicians 60+",range:[0,105],ticksuffix:"%"},showlegend:false,shapes:[{type:"line",x0:50,x1:50,y0:-.5,y1:12.5,line:{color:ACC,width:2,dash:"dash"}}]},cC);window._circChartsRendered=true;}




const D = JSON.parse(document.getElementById('payload').textContent);
const fmt = n => new Intl.NumberFormat('en-US').format(n);
const fmtD = n => '$' + Math.round(n);
const fmtPct = n => (n>=0?'+':'') + n.toFixed(1) + '%';

document.getElementById('meta-files').textContent = D.n_files;
document.getElementById('meta-rows').textContent = fmt(D.total_rows);
document.getElementById('gen-ts').textContent = new Date().toISOString().substring(0,10);

// Tabs
document.querySelectorAll('nav.tabs button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('nav.tabs button').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('section.tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('tab-' + b.dataset.tab).classList.add('active');
    if (b.dataset.tab === 'rates' && !window._ratesRendered) renderRates();
    if (b.dataset.tab === 'pr' && !window._prChartsRendered) renderPRCharts();
    if (b.dataset.tab === 'circularity' && !window._circChartsRendered) renderCircularityCharts();
    if (b.dataset.tab === 'duals' && !window._dualsChartsRendered) renderDualsCharts();
    if (b.dataset.tab === 'muni' && !window._muniChartsRendered) renderMuniCharts();
  });
});

// Architecture sub-navigation (Architecture / Lineage / Inventory / SQL)
document.querySelectorAll('#arch-subnav .subnav-btn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#arch-subnav .subnav-btn').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('#tab-arch .subpanel').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('sub-' + b.dataset.sub).classList.add('active');
    if (b.dataset.sub === 'graph' && !window._graphRendered) renderGraph();
  });
});

// Overview values
document.getElementById('ov-pr-rate').textContent = fmtD(D.pr_2026_rate) + '/mo';
document.getElementById('ov-us-rate').textContent = fmtD(D.us_2026_rate) + '/mo';
document.getElementById('ov-vi-rate').textContent = fmtD(D.pr_vs_us_ts[D.pr_vs_us_ts.length-1].vi) + '/mo';
document.getElementById('ov-gu-rate').textContent = fmtD(D.pr_vs_us_ts[D.pr_vs_us_ts.length-1].gu) + '/mo';
const gap = Math.round(D.us_2026_rate - D.pr_2026_rate);
document.getElementById('hero-gap').textContent = gap;
const prEnroll = 681971;
const annualGap = gap * prEnroll * 12;
const annualB = (annualGap / 1e9).toFixed(1);
const viRate = D.pr_vs_us_ts[D.pr_vs_us_ts.length-1].vi;
const viGap = Math.round(viRate - D.pr_2026_rate);
document.getElementById('hero-gap-note').innerHTML =
  `\u2014 paid to Puerto Rico's <span class="star-tag">\u2605 5-star plans</span> ` +
  `than to mainland plans, many of which carry lower quality ratings.` +
  `<div class="agg-callout">For every member, every month, the program's highest-rated market is paid less ` +
  `than any state \u2014 and <strong>$${viGap} less</strong> than the ` +
  `<strong><a href="https://www.cms.gov/medicare/payment/medicare-advantage-rates-statistics/ratebooks-supporting-data" ` +
  `target="_blank" style="color:#9b2c2c">US Virgin Islands</a></strong>, ` +
  `the territory next door, under the same Medicare statute.</div>` +
  `<span class="agg-foot">Mainland average $${Math.round(D.us_2026_rate)}/mo \u00b7 ` +
  `US Virgin Islands $${Math.round(viRate)}/mo \u00b7 ` +
  `Puerto Rico average $${Math.round(D.pr_2026_rate)}/mo \u00b7 ` +
  `${(D.pr_2026_rate/D.us_2026_rate*100).toFixed(1)}\u00a2 on the dollar.</span>`;

// Tables overview
const tableDescriptions = {
  ma_ratebooks_county: 'County-level MA capitation rates · 2010–2027',
  ma_ratebooks_regional: 'Regional PPO benchmark rates',
  ma_enrollment_by_cpsc: 'State / county / contract / plan enrollment',
  ma_enrollment_by_plan: 'Plan-level enrollment summaries',
  ma_ffs_expenditure: 'County-level Medicare FFS spending',
  ma_plan_directory: 'Contract + plan + parent organization directory',
  ma_cost_sharing_moop: 'Out-of-pocket maximum data',
  ma_announcements_documents: 'Rate announcement PDFs (parsed)',
};
const tb = document.getElementById('tables-body');
D.tables.forEach(([name, n]) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><code>${name}</code></td>
    <td style="text-align:right;font-variant-numeric:tabular-nums">${fmt(n)}</td>
    <td class="muted">${tableDescriptions[name] || ''}</td>`;
  tb.appendChild(tr);
});

// === HERO CHART (renders immediately on Overview) ===
function prepareForPrint() {
  // force-render every lazy chart so they appear in the printed report
  try { if (!window._ratesRendered) { renderRates(); window._ratesRendered = true; } } catch(e){}
  try { if (!window._prChartsRendered) { renderPRCharts(); window._prChartsRendered = true; } } catch(e){}
  try { if (!window._muniChartsRendered) { renderMuniCharts(); } } catch(e){}
  try { renderMuniPlans(''); } catch(e){}
  // give Plotly a moment to lay out, then resize for print width and open dialog
  setTimeout(() => {
    try {
      document.querySelectorAll('.js-plotly-plot').forEach(p => { try { Plotly.Plots.resize(p); } catch(e){} });
    } catch(e){}
    setTimeout(() => window.print(), 350);
  }, 450);
}

function renderHeroChart() {
  const yrs = D.pr_vs_us_ts.map(r=>r.year);
  const pr = D.pr_vs_us_ts.map(r=>r.pr);
  const us = D.pr_vs_us_ts.map(r=>r.us);
  const vi = D.pr_vs_us_ts.map(r=>r.vi);
  const gu = D.pr_vs_us_ts.map(r=>r.gu);
  const prText = pr.map(v => v ? '$' + Math.round(v) : '');
  const usText = us.map(v => v ? '$' + Math.round(v) : '');
  const viText = vi.map(v => v ? '$' + Math.round(v) : '');
  const guText = gu.map(v => v ? '$' + Math.round(v) : '');
  Plotly.newPlot('hero-chart', [
    { x: yrs, y: gu, name: 'Guam', mode: 'lines+markers+text',
      line: { color: '#059669', width: 2, shape: 'spline', dash: 'dot' },
      marker: { size: 6, color: '#059669' },
      text: guText, textposition: 'top center',
      textfont: { color: '#059669', size: 10, family: 'JetBrains Mono', weight: 600 },
      hovertemplate: 'Guam · %{x}: $%{y:.0f}<extra></extra>' },
    { x: yrs, y: vi, name: 'US Virgin Islands', mode: 'lines+markers+text',
      line: { color: '#2563eb', width: 2.5, shape: 'spline' },
      marker: { size: 7, color: '#2563eb' },
      text: viText, textposition: 'top center',
      textfont: { color: '#2563eb', size: 10, family: 'JetBrains Mono', weight: 600 },
      hovertemplate: 'US Virgin Islands · %{x}: $%{y:.0f}<extra></extra>' },
    { x: yrs, y: us, name: 'US mainland', mode: 'lines+markers+text',
      line: { color: '#2c5f4b', width: 2.5, shape: 'spline' },
      marker: { size: 7, color: '#2c5f4b' },
      text: usText, textposition: 'bottom center',
      textfont: { color: '#2c5f4b', size: 10, family: 'JetBrains Mono', weight: 600 },
      hovertemplate: 'US mainland · %{x}: $%{y:.0f}<extra></extra>' },
    { x: yrs, y: pr, name: 'Puerto Rico', mode: 'lines+markers+text',
      line: { color: '#9b2c2c', width: 2.5, shape: 'spline' },
      marker: { size: 7, color: '#9b2c2c' },
      text: prText, textposition: 'bottom center',
      textfont: { color: '#9b2c2c', size: 10, family: 'JetBrains Mono', weight: 600 },
      hovertemplate: 'Puerto Rico · %{x}: $%{y:.0f}<extra></extra>' },
  ], {
    paper_bgcolor: 'white', plot_bgcolor: 'white',
    font: { color: '#3a3a3a', family: 'Inter, sans-serif', size: 11 },
    xaxis: { gridcolor: '#ebe8e0', linecolor: '#d8d4c8',
             tickfont: { color: '#6b6b6b' }, dtick: 1 },
    yaxis: { gridcolor: '#ebe8e0', linecolor: '#d8d4c8',
             tickfont: { color: '#6b6b6b' }, tickformat: '$,.0f',
             range: [Math.min(...pr.filter(v=>v))*0.78, Math.max(...us.filter(v=>v))*1.08] },
    legend: { x: 0.02, y: 0.98, bgcolor: 'rgba(255,255,255,0.92)',
              bordercolor: '#d8d4c8', borderwidth: 1, font: { size: 11 } },
    margin: {t:24,l:56,r:18,b:34},
    hovermode: 'x unified',
  }, {displaylogo: false, responsive: true, staticPlot: false});
}
renderHeroChart();

// === GENERIC INTERACTIVE CHART RENDERER (Supporting charts) ===
function cfmt(v, f) {
  if (v == null) return '';
  if (f === '$')   return '$' + Math.round(v).toLocaleString();
  if (f === '%')   return v.toFixed(1) + '%';
  if (f === '%pm') return (v >= 0 ? '+' : '') + v.toFixed(1) + '%';
  if (f === 'x')   return v.toFixed(2) + 'x';
  if (f === 'int') return Math.round(v).toLocaleString();
  return String(v);
}
function ctick(f) {
  if (f === '$') return '$,.0f';
  if (f === '%' || f === '%pm') return '.0f';
  if (f === 'x') return '.1f';
  return ',.2s';
}
const C_BG='white', C_GRID='#ebe8e0', C_LINE='#d8d4c8', C_INK2='#3a3a3a', C_INK3='#6b6b6b';

function renderSpecChart(id, s) {
  const el = document.getElementById(id);
  if (!el || !s) return;
  const traces = [];

  if (s.kind === 'line') {
    s.series.forEach((ser, i) => {
      traces.push({
        x: s.x, y: ser.y, name: ser.name, mode: 'lines+markers+text',
        line: { color: ser.color, width: 2.4, shape: 'spline' },
        marker: { size: 6, color: ser.color },
        text: ser.y.map(v => cfmt(v, s.yfmt)),
        textposition: i === 0 ? 'top center' : 'bottom center',
        textfont: { color: ser.color, size: 9.5, family: 'JetBrains Mono', weight: 600 },
        fill: ser.fill ? 'tozeroy' : undefined,
        fillcolor: ser.fill ? 'rgba(155,44,44,0.06)' : undefined,
        hovertemplate: `${ser.name} · %{x}: ${s.yfmt==='$'?'$':''}%{y:,.2f}<extra></extra>`,
      });
    });
  } else if (s.kind === 'bar') {
    const ser = s.series[0];
    traces.push({
      x: s.x, y: ser.y, type: 'bar', name: ser.name,
      marker: { color: ser.colors || ser.color },
      text: ser.y.map(v => cfmt(v, s.yfmt)), textposition: 'outside',
      textfont: { size: 9.5, family: 'JetBrains Mono', color: C_INK2, weight: 600 },
      cliponaxis: false,
      customdata: ser.custom || null,
      hovertemplate: ser.custom
        ? `%{x}<br>%{y:.1f}%<br>%{customdata}<extra></extra>`
        : `%{x}: ${cfmtTmpl(s.yfmt)}<extra></extra>`,
    });
  } else if (s.kind === 'hbar') {
    const ser = s.series[0];
    traces.push({
      x: ser.y, y: s.x, type: 'bar', orientation: 'h', name: ser.name,
      marker: { color: ser.color },
      text: ser.y.map(v => cfmt(v, s.yfmt)), textposition: 'outside',
      textfont: { size: 9, family: 'JetBrains Mono', color: C_INK2, weight: 600 },
      cliponaxis: false,
      hovertemplate: `%{y}: %{x:,.0f}<extra></extra>`,
    });
  } else if (s.kind === 'gbar') {
    s.series.forEach(ser => {
      traces.push({
        x: s.x, y: ser.y, type: 'bar', name: ser.name,
        marker: { color: ser.color },
        text: ser.y.map(v => cfmt(v, s.yfmt)), textposition: 'outside',
        textfont: { size: 8.5, family: 'JetBrains Mono', color: ser.color, weight: 600 },
        cliponaxis: false,
        hovertemplate: `${ser.name} · %{x}: ${cfmtTmpl(s.yfmt)}<extra></extra>`,
      });
    });
  }

  // threshold / reference lines
  const shapes = [], annotations = [];
  (s.hlines || []).forEach(h => {
    shapes.push({ type: 'line', xref: 'paper', x0: 0, x1: 1, yref: 'y', y0: h.y, y1: h.y,
      line: { color: h.color, width: 1.3, dash: h.dash || 'dash' } });
    annotations.push({ xref: 'paper', x: 0.99, y: h.y, yref: 'y', text: h.label,
      showarrow: false, font: { color: h.color, size: 10, family: 'Inter' },
      xanchor: 'right', yanchor: 'bottom', bgcolor: 'rgba(255,255,255,0.8)' });
  });
  if (s.zeroline) shapes.push({ type: 'line', xref: 'paper', x0: 0, x1: 1, yref: 'y',
    y0: 0, y1: 0, line: { color: C_INK3, width: 1 } });

  const isHbar = s.kind === 'hbar';
  const layout = {
    paper_bgcolor: C_BG, plot_bgcolor: C_BG,
    font: { color: C_INK2, family: 'Inter, sans-serif', size: 11 },
    barmode: s.kind === 'gbar' ? 'group' : undefined,
    xaxis: {
      gridcolor: isHbar ? C_GRID : 'transparent', linecolor: C_LINE,
      tickfont: { color: C_INK3, size: s.xsmall ? 7 : 10 },
      tickangle: s.xangle || 0, automargin: true,
      tickformat: isHbar ? ctick(s.yfmt) : undefined,
      dtick: (s.kind === 'line' && typeof s.x[0] === 'number') ? 1 : undefined,
      type: ((s.kind === 'bar' || s.kind === 'gbar') && typeof s.x[0] === 'number') ? 'category' : undefined,
    },
    yaxis: {
      gridcolor: C_GRID, linecolor: C_LINE, tickfont: { color: C_INK3 },
      title: { text: isHbar ? '' : (s.ytitle || ''), font: { size: 10.5, color: C_INK3 } },
      tickformat: isHbar ? undefined : ctick(s.yfmt),
      type: s.ylog ? 'log' : undefined,
      range: s.yrange || undefined,
      automargin: true,
    },
    legend: { orientation: 'h', x: 0, y: 1.12, font: { size: 10 } },
    showlegend: s.series.length > 1,
    margin: { t: s.series.length > 1 ? 34 : 16, l: 52, r: 16, b: s.xangle ? 70 : 34 },
    shapes, annotations,
    hovermode: s.kind === 'line' ? 'x unified' : 'closest',
  };
  if (isHbar) { layout.yaxis.autorange = 'reversed'; layout.margin.l = 110; }

  Plotly.newPlot(id, traces, layout, { displaylogo: false, responsive: true });
}
function cfmtTmpl(f) {
  if (f === '$') return '$%{y:,.0f}';
  if (f === '%') return '%{y:.1f}%';
  if (f === '%pm') return '%{y:+.1f}%';
  if (f === 'x') return '%{y:.2f}x';
  return '%{y:,.0f}';
}

function renderPRCharts() {
  if (!D.chart_specs) return;
  Object.keys(D.chart_specs).forEach(k => renderSpecChart(k, D.chart_specs[k]));
  // Add USVI + Guam to PR trajectory chart
  const tYrs = D.pr_vs_us_ts.map(r=>r.year);
  const tVi = D.pr_vs_us_ts.map(r=>r.vi);
  const tGu = D.pr_vs_us_ts.map(r=>r.gu);
  Plotly.addTraces('chart_pr_trajectory', [
    { x: tYrs, y: tGu, name: 'Guam', mode: 'lines+markers+text',
      line: { color: '#059669', width: 2, shape: 'spline', dash: 'dot' },
      marker: { size: 5, color: '#059669' },
      text: tGu.map(v=>v?'$'+Math.round(v):''), textposition:'top center',
      textfont:{color:'#059669',size:9,family:'JetBrains Mono'},
      hovertemplate: 'Guam: $%{y:.0f}<extra></extra>' },
    { x: tYrs, y: tVi, name: 'USVI', mode: 'lines+markers+text',
      line: { color: '#2563eb', width: 2, shape: 'spline', dash: 'dash' },
      marker: { size: 5, color: '#2563eb' },
      text: tVi.map(v=>v?'$'+Math.round(v):''), textposition:'bottom center',
      textfont:{color:'#2563eb',size:9,family:'JetBrains Mono'},
      hovertemplate: 'USVI: $%{y:.0f}<extra></extra>' }
  ]);
  // Add USVI + Guam as % of US to the gap-pct chart
  const gVi = D.pr_vs_us_ts.map(r => r.vi && r.us ? +(r.vi/r.us*100).toFixed(1) : null);
  const gGu = D.pr_vs_us_ts.map(r => r.gu && r.us ? +(r.gu/r.us*100).toFixed(1) : null);
  Plotly.addTraces('chart_pr_gap_pct', [
    { x: tYrs, y: gGu, name: 'Guam as % of US', mode: 'lines+markers+text',
      line: { color: '#059669', width: 2, shape: 'spline', dash: 'dot' },
      marker: { size: 5, color: '#059669' },
      text: gGu.map(v => v ? v.toFixed(1)+'%' : ''),
      textposition: 'top center',
      textfont: { color: '#059669', size: 9, family: 'JetBrains Mono' },
      hovertemplate: 'Guam: %{y:.1f}% of US<extra></extra>' },
    { x: tYrs, y: gVi, name: 'USVI as % of US', mode: 'lines+markers+text',
      line: { color: '#2563eb', width: 2, shape: 'spline', dash: 'dash' },
      marker: { size: 5, color: '#2563eb' },
      text: gVi.map(v => v ? v.toFixed(1)+'%' : ''),
      textposition: 'top center',
      textfont: { color: '#2563eb', size: 9, family: 'JetBrains Mono' },
      hovertemplate: 'USVI: %{y:.1f}% of US<extra></extra>' }
  ]);
  // Add USVI + Guam Y/Y growth
  const viYoY = tVi.map((v,i) => i === 0 || !v || !tVi[i-1] ? null : +((v - tVi[i-1]) / tVi[i-1] * 100).toFixed(1));
  const guYoY = tGu.map((v,i) => i === 0 || !v || !tGu[i-1] ? null : +((v - tGu[i-1]) / tGu[i-1] * 100).toFixed(1));
  const yoyYrs = tYrs.slice(1);
  Plotly.addTraces('chart_yoy_growth', [
    { x: yoyYrs, y: guYoY.slice(1), name: 'Guam Y/Y', mode: 'lines+markers',
      line: { color: '#059669', width: 2, dash: 'dot' },
      marker: { size: 5, color: '#059669' },
      hovertemplate: 'Guam: %{y:.1f}%<extra></extra>' },
    { x: yoyYrs, y: viYoY.slice(1), name: 'USVI Y/Y', mode: 'lines+markers',
      line: { color: '#2563eb', width: 2, dash: 'dash' },
      marker: { size: 5, color: '#2563eb' },
      hovertemplate: 'USVI: %{y:.1f}%<extra></extra>' }
  ]);
  window._prChartsRendered = true;
}

// Stars
const parseStar = v => { const f = parseFloat(String(v).trim()); return isNaN(f) ? null : f; };
const starsStr = n => {
  let s = '';
  for (let i=0; i<Math.floor(n); i++) s += '★';
  if (n % 1) s += '½';
  return s;
};
const fiveStarBox = document.getElementById('five-star-cards');
const fourHalfBox = document.getElementById('four-half-star-cards');
D.pr_star_ratings.forEach(r => {
  const n = parseStar(r['2026 Overall']);
  if (n === null) return;
  const enrolled = r.enrolled || 0;
  const card = document.createElement('div');
  card.className = 'star-card ' + (n === 5.0 ? 'r5' : 'r45');
  card.innerHTML = `
    <div class="ctr">${r['Contract Number']}</div>
    <div class="brand">${r['Organization Marketing Name']}</div>
    <div class="parent">${r['Parent Organization']}</div>
    <div class="stars">${starsStr(n)}</div>
    <div style="font-size:12px;color:#6b6b6b;font-family:'Source Serif 4',serif;font-style:italic;margin-bottom:4px">
      Overall: <strong style="color:#1a1a1a;font-style:normal">${n}</strong>
      · Part C: ${r['2026 Part C Summary']} · Part D: ${r['2026 Part D Summary']}</div>
    <div class="stats">
      <div><span class="n">${fmt(enrolled)}</span> enrolled</div>
    </div>`;
  if (n === 5.0) fiveStarBox.appendChild(card);
  else if (n === 4.5 && enrolled >= 1000) fourHalfBox.appendChild(card);
});

// PR market table
const ratingsByContract = {};
D.pr_star_ratings.forEach(r => {
  const n = parseStar(r['2026 Overall']);
  ratingsByContract[r['Contract Number']] = {
    stars: n, brand: r['Organization Marketing Name'], parent: r['Parent Organization'],
  };
});
const prTotal = D.pr_market_2026.reduce((s,r)=>s+(r.enr||0),0);
const prMarketBody = document.getElementById('pr-market-body');
D.pr_market_2026.forEach(r => {
  const rating = ratingsByContract[r.contract_number];
  const tr = document.createElement('tr');
  const share = (100*r.enr/prTotal).toFixed(1);
  const star = rating && rating.stars
    ? `<span style="color:#b8893a;text-shadow:0 0 6px rgba(212,175,55,0.35);font-size:15px;letter-spacing:2px">${starsStr(rating.stars)}</span> <span class="muted">${rating.stars}</span>`
    : '<span class="muted">—</span>';
  const brand = rating
    ? `<strong style="color:#1a1a1a">${rating.brand}</strong> <span class="muted">· ${rating.parent}</span>`
    : '<span class="muted">unmapped</span>';
  tr.innerHTML = `<td><code>${r.contract_number}</code></td>
    <td>${brand}</td><td>${star}</td>
    <td style="text-align:right;font-variant-numeric:tabular-nums">${fmt(r.enr)}</td>
    <td style="text-align:right;color:#9b2c2c;font-weight:500">${share}%</td>`;
  prMarketBody.appendChild(tr);
});
// total row
(function(){
  const foot = document.getElementById('pr-market-foot');
  if (!foot) return;
  const tr = document.createElement('tr');
  tr.style.cssText = 'font-weight:700;border-top:2px solid #9b2c2c;background:#faf6f2';
  tr.innerHTML = `<td><code>TOTAL</code></td>
    <td>${D.pr_market_2026.length} contracts shown</td>
    <td></td>
    <td style="text-align:right;font-variant-numeric:tabular-nums">${fmt(prTotal)}</td>
    <td style="text-align:right;color:#9b2c2c">100.0%</td>`;
  foot.appendChild(tr);
})();

// === RATE TRAJECTORY CHARTS ===
function renderRates() {
  const yrs = D.pr_vs_us_ts.map(r=>r.year);
  const pr = D.pr_vs_us_ts.map(r=>r.pr);
  const us = D.pr_vs_us_ts.map(r=>r.us);
  const vi_r = D.pr_vs_us_ts.map(r=>r.vi);
  const gu_r = D.pr_vs_us_ts.map(r=>r.gu);
  const prText = pr.map(v => v ? '$' + Math.round(v) : '');
  const usText = us.map(v => v ? '$' + Math.round(v) : '');

  const baseLayout = {
    paper_bgcolor: 'white', plot_bgcolor: 'white',
    font: { color: '#3a3a3a', family: 'Inter, sans-serif', size: 12 },
    xaxis: { gridcolor: '#ebe8e0', linecolor: '#d8d4c8',
             tickfont: { color: '#6b6b6b' }, dtick: 1 },
    yaxis: { gridcolor: '#ebe8e0', linecolor: '#d8d4c8',
             tickfont: { color: '#6b6b6b' } },
    legend: { x: 0.02, y: 0.98, bgcolor: 'rgba(255,255,255,0.92)',
              bordercolor: '#d8d4c8', borderwidth: 1, font: { size: 11 } },
    margin: {t:20,l:64,r:24,b:50},
    hovermode: 'x unified',
  };

  Plotly.newPlot('rate-plot-money', [
    { x: yrs, y: us, name: 'US mainland', mode: 'lines+markers+text',
      line: { color: '#2c5f4b', width: 2.5, shape: 'spline' },
      marker: { size: 8, color: '#2c5f4b' },
      text: usText, textposition: 'top center',
      textfont: { color: '#2c5f4b', size: 10.5, family: 'JetBrains Mono' } },
    { x: yrs, y: gu_r, name: 'Guam', mode: 'lines+markers+text',
      line: { color: '#059669', width: 2, shape: 'spline', dash: 'dot' },
      marker: { size: 6, color: '#059669' },
      text: gu_r.map(v=>v?'$'+Math.round(v):''), textposition:'top center',
      textfont:{color:'#059669',size:9,family:'JetBrains Mono'},
      hovertemplate: 'Guam · %{x}: $%{y:.0f}<extra></extra>' },
    { x: yrs, y: vi_r, name: 'USVI', mode: 'lines+markers+text',
      line: { color: '#2563eb', width: 2, shape: 'spline', dash: 'dash' },
      marker: { size: 6, color: '#2563eb' },
      text: vi_r.map(v=>v?'$'+Math.round(v):''), textposition:'bottom center',
      textfont:{color:'#2563eb',size:9,family:'JetBrains Mono'},
      hovertemplate: 'USVI: %{x}: $%{y:.0f}<extra></extra>' },
    { x: yrs, y: pr, name: 'Puerto Rico', mode: 'lines+markers+text',
      line: { color: '#9b2c2c', width: 2.5, shape: 'spline' },
      marker: { size: 8, color: '#9b2c2c' },
      text: prText, textposition: 'bottom center',
      textfont: { color: '#9b2c2c', size: 10.5, family: 'JetBrains Mono' } },
  ], { ...baseLayout,
       yaxis: { ...baseLayout.yaxis, title: 'Monthly capitation ($)', tickformat: '$,.0f' },
     }, {displaylogo: false, responsive: true});

  const prPct = D.pr_vs_us_ts.map(r=>r.pr_as_pct_us);
  const prYoy = D.pr_vs_us_ts.map(r=>r.pr_yoy_pct);
  const usYoy = D.pr_vs_us_ts.map(r=>r.us_yoy_pct);
  const prPctText = prPct.map(v => v ? v.toFixed(1) + '%' : '');
  const viPct = vi_r.map((v,i) => v && us[i] ? +(v/us[i]*100).toFixed(1) : null);
  const guPct = gu_r.map((v,i) => v && us[i] ? +(v/us[i]*100).toFixed(1) : null);

  Plotly.newPlot('rate-plot-pct', [
    { x: yrs, y: prPct, name: 'PR as % of US', mode: 'lines+markers+text',
      line: { color: '#9b2c2c', width: 2.5, shape: 'spline' },
      marker: { size: 8, color: '#9b2c2c' },
      text: prPctText, textposition: 'top center',
      textfont: { color: '#9b2c2c', size: 10.5, family: 'JetBrains Mono' },
      yaxis: 'y' },
    { x: yrs, y: prYoy, name: 'PR Y/Y growth', mode: 'lines+markers',
      line: { color: '#9b2c2c', width: 1.8, dash: 'dot' },
      marker: { size: 5, color: '#9b2c2c' }, yaxis: 'y2' },
    { x: yrs, y: guPct, name: 'Guam as % of US', mode: 'lines+markers+text',
      line: { color: '#059669', width: 2, dash: 'dot' },
      marker: { size: 5, color: '#059669' },
      text: guPct.map(v=>v?v.toFixed(1)+'%':''), textposition:'top center',
      textfont:{color:'#059669',size:9,family:'JetBrains Mono'}, yaxis: 'y' },
    { x: yrs, y: viPct, name: 'USVI as % of US', mode: 'lines+markers+text',
      line: { color: '#2563eb', width: 2, dash: 'dash' },
      marker: { size: 5, color: '#2563eb' },
      text: viPct.map(v=>v?v.toFixed(1)+'%':''), textposition:'bottom center',
      textfont:{color:'#2563eb',size:9,family:'JetBrains Mono'}, yaxis: 'y' },
    { x: yrs, y: usYoy, name: 'US Y/Y growth', mode: 'lines+markers',
      line: { color: '#2c5f4b', width: 1.8, dash: 'dot' },
      marker: { size: 5, color: '#2c5f4b' }, yaxis: 'y2' },
  ], { ...baseLayout,
       yaxis: { ...baseLayout.yaxis, title: 'PR as % of US', side: 'left' },
       yaxis2: { ...baseLayout.yaxis, title: 'Y/Y %',
                 overlaying: 'y', side: 'right',
                 showgrid: false, zeroline: true, zerolinecolor: '#d8d4c8' },
       legend: { ...baseLayout.legend, orientation: 'h',
                 y: -0.22, x: 0.5, xanchor: 'center' },
       margin: {t:20,l:60,r:60,b:60},
     }, {displaylogo: false, responsive: true});

  const tbl = document.getElementById('rate-table');
  D.pr_vs_us_ts.forEach(r => {
    if (!r.pr || !r.us) return;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${r.year}</strong></td>
      <td style="text-align:right;color:#9b2c2c;font-variant-numeric:tabular-nums">${fmtD(r.pr)}</td>
      <td style="text-align:right;color:#2c5f4b;font-variant-numeric:tabular-nums">${fmtD(r.us)}</td>
      <td style="text-align:right;font-variant-numeric:tabular-nums">${r.pr_as_pct_us!=null?r.pr_as_pct_us.toFixed(1)+'%':''}</td>
      <td style="text-align:right;font-variant-numeric:tabular-nums">${r.pr_yoy_pct!=null?fmtPct(r.pr_yoy_pct):''}</td>
      <td style="text-align:right;font-variant-numeric:tabular-nums">${r.us_yoy_pct!=null?fmtPct(r.us_yoy_pct):''}</td>
      <td style="text-align:right;font-variant-numeric:tabular-nums" class="muted">$${(r.us-r.pr).toFixed(0)}</td>`;
    tbl.appendChild(tr);
  });
  window._ratesRendered = true;
}

// Inventory
const invBody = document.getElementById('inv-body');
const invCount = document.getElementById('inv-count');
let invSort = {key: 'year', dir: -1};
function renderInv(filter) {
  invBody.innerHTML = '';
  const filt = (filter||'').toLowerCase();
  const rows = D.files.filter(f => !filt || (f.name||'').toLowerCase().includes(filt)
    || (f.category||'').toLowerCase().includes(filt) || String(f.year||'').includes(filt));
  rows.sort((a,b) => {
    const k = invSort.key, d = invSort.dir;
    let av = a[k] || 0, bv = b[k] || 0;
    if (typeof av === 'string') av = av.toLowerCase();
    if (typeof bv === 'string') bv = bv.toLowerCase();
    return (av<bv?-1:av>bv?1:0) * d;
  });
  rows.forEach(f => {
    const tr = document.createElement('tr');
    const mb = f.bytes ? (f.bytes/1024/1024).toFixed(2) + ' MB' : '—';
    tr.innerHTML = `
      <td>${f.year || ''}${f.month ? '-' + String(f.month).padStart(2,'0') : ''}</td>
      <td><span class="pill">${f.category||''}</span></td>
      <td>${f.name}</td>
      <td style="text-align:right" class="muted">${mb}</td>
      <td><a href="${f.url}" target="_blank">cms.gov →</a></td>`;
    invBody.appendChild(tr);
  });
  invCount.textContent = rows.length + ' files';
}
document.getElementById('inv-search').addEventListener('input', e => renderInv(e.target.value));
document.querySelectorAll('#sub-inventory th[data-sort]').forEach(th => {
  th.addEventListener('click', () => {
    const k = th.dataset.sort;
    if (invSort.key === k) invSort.dir *= -1;
    else { invSort.key = k; invSort.dir = 1; }
    renderInv(document.getElementById('inv-search').value);
  });
});
renderInv();

// === MUNI PLAN ENROLLMENT TABLE ===
const muniBody = document.getElementById('muni-plan-body');
const muniCount = document.getElementById('muni-count');
let muniSort = {key: 'e', dir: -1};
let muniMaxShare = D.pr_muni_plans ? Math.max(...D.pr_muni_plans.map(r=>r.s)) : 100;

function renderMuniPlans(filter) {
  if (!D.pr_muni_plans) return;
  muniBody.innerHTML = '';
  const filt = (filter||'').toLowerCase().trim();
  let rows = D.pr_muni_plans.filter(r => {
    if (!filt) return true;
    return (r.m||'').toLowerCase().includes(filt)
        || (r.b||'').toLowerCase().includes(filt)
        || (r.par||'').toLowerCase().includes(filt);
  });
  rows.sort((a,b) => {
    const k = muniSort.key, d = muniSort.dir;
    let av = a[k] ?? '', bv = b[k] ?? '';
    if (typeof av === 'string') av = av.toLowerCase();
    if (typeof bv === 'string') bv = bv.toLowerCase();
    return (av<bv?-1:av>bv?1:0) * d;
  });

  const frag = document.createDocumentFragment();
  rows.forEach(r => {
    const tr = document.createElement('tr');
    const barW = Math.max(2, Math.round(70 * r.s / muniMaxShare));
    tr.innerHTML = `
      <td class="muni-cell">${r.m}</td>
      <td class="brand-cell">${r.b}<br><span class="muted" style="font-size:11.5px">${r.par}</span></td>
      <td style="text-align:right;font-variant-numeric:tabular-nums;font-weight:600">${r.e.toLocaleString()}</td>
      <td style="text-align:right;font-variant-numeric:tabular-nums">
        <span class="share-bar" style="width:${barW}px"></span>${r.s.toFixed(1)}%
      </td>`;
    frag.appendChild(tr);
  });
  muniBody.appendChild(frag);

  const totalEnr = rows.reduce((s, r) => s + (r.e||0), 0);
  muniCount.innerHTML = filt
    ? `<strong>${rows.length.toLocaleString()}</strong> rows · <strong>${totalEnr.toLocaleString()}</strong> enrollees match "${filt}"`
    : `<strong>${rows.length.toLocaleString()}</strong> rows · all 78 municipios · ${new Set(D.pr_muni_plans.map(r=>r.b)).size} brands`;

  // Total row (re-sums whatever is currently shown)
  const munis = new Set(rows.map(r => r.m));
  document.getElementById('muni-total-enr').textContent = totalEnr.toLocaleString();
  const ctx = document.getElementById('muni-total-ctx');
  const shareCell = document.getElementById('muni-total-share');
  if (munis.size === 1) {
    // single municipio in view → shares are comparable, sum them (~100%)
    const totShare = rows.reduce((s, r) => s + (r.s||0), 0);
    shareCell.textContent = totShare.toFixed(1) + '%';
    ctx.textContent = `${[...munis][0]} · ${rows.length} brand${rows.length!==1?'s':''}`;
  } else {
    shareCell.textContent = '—';
    ctx.textContent = filt
      ? `${rows.length} rows across ${munis.size} municipios`
      : `${munis.size} municipios · ${new Set(rows.map(r=>r.b)).size} brands`;
  }
}

if (D.pr_muni_plans) {
  document.getElementById('muni-search').addEventListener('input', e => {
    document.querySelectorAll('.muni-quick-btn').forEach(b => b.classList.remove('active'));
    renderMuniPlans(e.target.value);
  });
  document.querySelectorAll('.muni-quick-btn').forEach(b => {
    b.addEventListener('click', () => {
      const q = b.dataset.quick;
      document.querySelectorAll('.muni-quick-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.getElementById('muni-search').value = q;
      renderMuniPlans(q);
    });
  });
  document.querySelectorAll('th[data-mp-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const k = th.dataset.mpSort;
      if (muniSort.key === k) muniSort.dir *= -1;
      else { muniSort.key = k; muniSort.dir = (k === 'm' || k === 'b') ? 1 : -1; }
      renderMuniPlans(document.getElementById('muni-search').value);
    });
  });
  renderMuniPlans('');
  // mark "All municipios" active by default
  document.querySelector('.muni-quick-btn[data-quick=""]').classList.add('active');
}

// ---- Municipio charts (statewide by plan + stacked by municipio) ----
const MUNI_PLAN_COLORS = {
  'MCS Classicare': '#008834',
  'Medicare y Mucho Mas (MMM)': '#0a3d1c',
  'Triple-S Advantage': '#0057b8',
  'Aetna Medicare': '#2563eb',
};
function muniPlanOrder() {
  // largest statewide first, stable
  const tot = {};
  D.pr_muni_plans.forEach(r => { tot[r.b] = (tot[r.b]||0) + r.e; });
  return Object.keys(tot).sort((a,b) => tot[b]-tot[a]);
}
function renderMuniSummary() {
  if (!D.pr_muni_plans || typeof Plotly === 'undefined') return;
  const tot = {};
  D.pr_muni_plans.forEach(r => { tot[r.b] = (tot[r.b]||0) + r.e; });
  const plans = muniPlanOrder();
  const grand = plans.reduce((s,p)=>s+tot[p],0);
  const y = plans.map(p => tot[p]);
  const labels = plans.map(p => `${tot[p].toLocaleString()}  ·  ${(100*tot[p]/grand).toFixed(1)}%`);
  Plotly.newPlot('muni-plan-summary', [{
    x: plans, y: y, type: 'bar',
    marker: { color: plans.map(p => MUNI_PLAN_COLORS[p] || '#888') },
    text: labels, textposition: 'outside',
    textfont: { size: 11, family: 'JetBrains Mono', color: '#3a3a3a', weight: 600 },
    cliponaxis: false,
    customdata: plans.map(p => (100*tot[p]/grand).toFixed(1)),
    hovertemplate: '%{x}<br>%{y:,.0f} enrollees · %{customdata}% of PR MA<extra></extra>',
  }], {
    paper_bgcolor: 'white', plot_bgcolor: 'white',
    font: { color: '#3a3a3a', family: 'Inter, sans-serif', size: 11 },
    xaxis: { tickfont: { color: '#3a3a3a', size: 12 }, linecolor: '#d8d4c8' },
    yaxis: { gridcolor: '#ebe8e0', linecolor: '#d8d4c8', tickformat: ',.0f',
             tickfont: { color: '#6b6b6b' }, range: [0, Math.max(...y)*1.18] },
    margin: { t: 16, l: 64, r: 18, b: 40 },
  }, { displaylogo: false, responsive: true });
}
let muniStackSort = 'total';
function renderMuniStack() {
  if (!D.pr_muni_plans || typeof Plotly === 'undefined') return;
  const plans = muniPlanOrder();
  // pivot: municipio -> {plan: {e, s}}
  const piv = {}, muniTot = {};
  D.pr_muni_plans.forEach(r => {
    (piv[r.m] = piv[r.m] || {})[r.b] = { e: r.e, s: r.s };
    muniTot[r.m] = (muniTot[r.m]||0) + r.e;
  });
  let munis = Object.keys(piv);
  if (muniStackSort === 'alpha') {
    munis.sort((a,b) => a < b ? 1 : -1); // reversed: Plotly h-bars stack bottom-up, so A ends on top
  } else if (muniStackSort === 'mcs') {
    const mcsShare = m => (piv[m]['MCS Classicare']?.s) || 0;
    munis.sort((a,b) => mcsShare(a) - mcsShare(b));
  } else if (muniStackSort === 'tss') {
    const tssShare = m => (piv[m]['Triple-S Advantage']?.s) || 0;
    munis.sort((a,b) => tssShare(a) - tssShare(b));
  } else if (muniStackSort === 'mmm') {
    const mmmShare = m => (piv[m]['Medicare y Mucho Mas (MMM)']?.s) || 0;
    munis.sort((a,b) => mmmShare(a) - mmmShare(b));
  } else {
    munis.sort((a,b) => muniTot[a] - muniTot[b]); // ascending → biggest on top
  }
  const traces = plans.map(p => ({
    type: 'bar', orientation: 'h', name: p,
    y: munis,
    x: munis.map(m => piv[m][p]?.e || 0),
    marker: { color: MUNI_PLAN_COLORS[p] || '#888' },
    customdata: munis.map(m => piv[m][p] ? [piv[m][p].s.toFixed(1), muniTot[m].toLocaleString()] : ['0.0', muniTot[m].toLocaleString()]),
    hovertemplate: `<b>%{y}</b> · ${p}<br>%{x:,.0f} enrollees · %{customdata[0]}% of municipio<br><span style="color:#888">municipio total: %{customdata[1]}</span><extra></extra>`,
  }));
  Plotly.newPlot('muni-stack-chart', traces, {
    barmode: 'stack',
    paper_bgcolor: 'white', plot_bgcolor: 'white',
    font: { color: '#3a3a3a', family: 'Inter, sans-serif', size: 10.5 },
    xaxis: { gridcolor: '#ebe8e0', linecolor: '#d8d4c8', tickformat: ',.0f',
             tickfont: { color: '#6b6b6b' }, title: { text: 'Enrollees', font: { size: 11, color: '#6b6b6b' } } },
    yaxis: { tickfont: { color: '#3a3a3a', size: 10 }, automargin: true },
    legend: { orientation: 'h', x: 0, y: 1.012, font: { size: 11 },
              bgcolor: 'rgba(255,255,255,0.9)' },
    margin: { t: 40, l: 8, r: 30, b: 44 },
    bargap: 0.28,
  }, { displaylogo: false, responsive: true });
}
function renderMuniCharts() {
  renderMuniSummary();
  renderMuniStack();
  window._muniChartsRendered = true;
}
if (D.pr_muni_plans) {
  document.querySelectorAll('.muni-sort-btn').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.muni-sort-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      muniStackSort = b.dataset.sort;
      renderMuniStack();
    });
  });
}

// Knowledge graph
const groupColors = {
  source: '#9b2c2c', dataset: '#b85450', table: '#2c5f4b',
  view: '#b8893a', analysis: '#6b4e8a',
};
const nodeInfo = {
  cms_gov: ['Source', 'https://www.cms.gov', 'Primary CMS publication portal.'],
  data_cms: ['Source', 'https://data.cms.gov', 'CMS open data portal.'],
  medpac: ['Source', 'https://www.medpac.gov', 'Medicare Payment Advisory Commission.'],
  congress: ['Source', '—', 'Congressional comment letters on Advance Notices.'],
  ratebooks: ['Dataset', 'Annual ratebook ZIPs', 'County capitation rates by bonus tier.'],
  enrollment_data: ['Dataset', 'Monthly CPSC files', 'State/county/contract/plan enrollment.'],
  ffs_data: ['Dataset', 'FFS data 2015-2024', 'Per-capita Medicare FFS spending.'],
  announcements: ['Dataset', 'Advance Notice PDFs', 'Rate announcements and methodology.'],
  plan_directory_files: ['Dataset', 'Contract Info ZIPs', 'Contract / plan / parent mapping.'],
  cost_sharing_files: ['Dataset', 'PBP files', 'MOOP and cost-sharing.'],
  medpac_reports: ['Dataset', 'MedPAC PDFs', 'March chapters, Data Book sections.'],
  ma_ratebooks_county: ['Table', '389,715 rows', 'Long-format county capitation rates.'],
  ma_ratebooks_regional: ['Table', '1,482 rows', 'Regional PPO benchmarks.'],
  ma_enrollment_by_cpsc: ['Table', '24.6M rows', 'Monthly enrollment, 2020-2026.'],
  ma_enrollment_by_plan: ['Table', '54,762 rows', 'Plan-level rollup.'],
  ma_ffs_expenditure: ['Table', '3.6M rows', 'County FFS expenditure.'],
  ma_plan_directory: ['Table', '54,702 rows', 'Contract + plan + parent directory.'],
  ma_cost_sharing_moop: ['Table', '3,654 rows', 'Out-of-pocket maximum data.'],
  ma_announcements_documents: ['Table', '2,626 rows', 'Parsed advance notice PDFs.'],
  v_pr_payments: ['View', 'PR/VI slice', 'Pre-filtered PR/VI payment data.'],
  v_payment_ts: ['View', 'Annual averages', 'Avg rate by state/region/year.'],
  pr_trajectory: ['Analysis', 'main report + 5 charts', 'PR rate trajectory 2018-2027.'],
  ffs_vs_ma: ['Analysis', 'Addendum 2', 'PR FFS-vs-MA gap. 1.48× vs 1.13×.'],
  pr_market: ['Analysis', 'Addendum 3', 'PR enrollment + HHI + concentration.'],
  medpac_validation: ['Analysis', 'Addendum 4', 'MedPAC + Hernández letter cross-check.'],
  methodology_2027: ['Analysis', 'Addendum 1', 'CMS 2027 PR adjustments.'],
};

let cy = null;
let currentRoot = null;
const activeFilters = new Set(['source','dataset','table','view','analysis']);

function makeElements(filterSet, rootId) {
  let visibleNodes;
  if (rootId === 'sources') {
    visibleNodes = D.graph.nodes.filter(n => n.group === 'source').map(n => n.id);
  } else if (rootId === 'all') {
    visibleNodes = D.graph.nodes.filter(n => filterSet.has(n.group)).map(n => n.id);
  } else {
    const desc = new Set([rootId]);
    const queue = [rootId];
    while (queue.length) {
      const cur = queue.shift();
      (D.graph.children[cur] || []).forEach(c => {
        if (!desc.has(c)) { desc.add(c); queue.push(c); }
      });
    }
    (D.graph.parents[rootId] || []).forEach(p => desc.add(p));
    visibleNodes = D.graph.nodes
      .filter(n => desc.has(n.id) && filterSet.has(n.group))
      .map(n => n.id);
  }
  const nodeSet = new Set(visibleNodes);
  return [
    ...D.graph.nodes
      .filter(n => nodeSet.has(n.id))
      .map(n => ({ data: { id: n.id, label: n.label, group: n.group } })),
    ...D.graph.edges
      .filter(e => nodeSet.has(e.from) && nodeSet.has(e.to))
      .map((e, i) => ({ data: { id: 'e_' + e.from + '_' + e.to, source: e.from, target: e.to } })),
  ];
}

function renderGraph() {
  const layoutGraph = (root) => {
    currentRoot = root;
    const elements = makeElements(activeFilters, root);
    if (cy) { cy.destroy(); }
    cy = cytoscape({
      container: document.getElementById('graph'),
      elements: elements,
      layout: { name: 'breadthfirst', directed: true, padding: 30, spacingFactor: 1.3, animate: false },
      style: [
        { selector: 'node', style: {
          'label': 'data(label)', 'text-wrap': 'wrap', 'text-max-width': '150px',
          'text-valign': 'center', 'text-halign': 'center',
          'font-size': 11, 'font-family': 'Inter, sans-serif', 'font-weight': 500,
          'color': 'white',
          'background-color': ele => groupColors[ele.data('group')] || '#888',
          'border-width': 1, 'border-color': '#fff',
          'shape': 'round-rectangle',
          'width': 'label', 'height': 'label', 'padding': 12,
        }},
        { selector: 'edge', style: {
          'curve-style': 'bezier', 'target-arrow-shape': 'triangle',
          'line-color': '#c4c0b6', 'target-arrow-color': '#c4c0b6',
          'width': 1.2, 'arrow-scale': 0.8,
        }},
        { selector: 'node:selected', style: {
          'border-width': 3, 'border-color': '#b8893a',
        }},
      ],
      wheelSensitivity: 0.2,
    });

    const detail = document.getElementById('graph-detail');
    cy.on('tap', 'node', evt => {
      const n = evt.target;
      const id = n.data('id'); const meta = nodeInfo[id] || [n.data('group'), '', n.data('label')];
      const childCount = (D.graph.children[id] || []).length;
      detail.innerHTML = `
        <h4>${n.data('label').replace(/\n/g, ' ')} <span class="pill" style="margin-left:6px">${meta[0]}</span></h4>
        <div class="lineage">${meta[2]}</div>
        ${meta[1] ? `<div class="muted" style="margin-top:8px"><code>${meta[1]}</code></div>` : ''}
        ${childCount ? `<div style="margin-top:12px"><button onclick="window.expandNode('${id}')"
          style="background:#9b2c2c;color:white;border:none;padding:7px 16px;
          cursor:pointer;font-family:'Inter',sans-serif;font-size:11.5px;font-weight:500">
          Expand ${childCount} child${childCount > 1 ? 'ren' : ''} →</button></div>` : ''}
      `;
    });

    const trail = document.getElementById('crumb-trail');
    if (root === 'sources') {
      trail.innerHTML = '<span class="crumb" data-crumb="root">Sources</span>';
    } else if (root === 'all') {
      trail.innerHTML = '<span class="crumb" data-crumb="root">Sources</span> <span class="arrow">→</span> <span class="crumb">All tiers</span>';
    } else {
      const node = D.graph.nodes.find(n => n.id === root);
      const label = node ? node.label.replace(/\n/g, ' ') : root;
      trail.innerHTML = '<span class="crumb" data-crumb="root">Sources</span> <span class="arrow">→</span> <span class="crumb">' + label + '</span>';
    }
    trail.querySelectorAll('.crumb[data-crumb="root"]').forEach(c => {
      c.addEventListener('click', () => layoutGraph('sources'));
    });
  };

  window.expandNode = (id) => layoutGraph(id);

  document.querySelectorAll('.graph-controls button[data-view]').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.graph-controls button[data-view]').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      layoutGraph(b.dataset.view);
    });
  });
  document.querySelectorAll('.graph-controls button.filter').forEach(b => {
    b.addEventListener('click', () => {
      const f = b.dataset.filter;
      if (activeFilters.has(f)) { activeFilters.delete(f); b.classList.remove('active'); }
      else { activeFilters.add(f); b.classList.add('active'); }
      layoutGraph(currentRoot);
    });
  });
  document.getElementById('graph-reset').addEventListener('click', () => {
    ['source','dataset','table','view','analysis'].forEach(g => activeFilters.add(g));
    document.querySelectorAll('.graph-controls button.filter').forEach(b => b.classList.add('active'));
    document.querySelectorAll('.graph-controls button[data-view]').forEach(x => x.classList.remove('active'));
    document.querySelector('.graph-controls button[data-view="sources"]').classList.add('active');
    layoutGraph('sources');
  });

  layoutGraph('sources');
  window._graphRendered = true;
}

// ── Invisible Duals charts ──
function renderDualsCharts() {
  const RED='#c0392b', GRN='#2c5f4b', BLU='#2563eb';
  const bL={paper_bgcolor:'white',plot_bgcolor:'white',font:{color:'#3a3a3a',family:'Inter,sans-serif',size:12},margin:{t:20,l:60,r:20,b:50},xaxis:{gridcolor:'#ebe8e0'},yaxis:{gridcolor:'#ebe8e0'}};
  const bC={displaylogo:false,responsive:true};

  // Chart 1: Gap
  Plotly.newPlot('chart_duals_gap',[
    {x:['Duals who LIVE in Puerto Rico','Duals the federal data COUNTS (CY2023)'],y:[302000,13255],type:'bar',
     marker:{color:[GRN,RED]},
     text:['~302,000','13,255'],textposition:'outside',textfont:{size:14,family:'JetBrains Mono',weight:700},
     hovertemplate:'<b>%{x}</b><br>%{y:,.0f} duals<extra></extra>'}
  ],{...bL,yaxis:{...bL.yaxis,title:'Dual eligibles',tickformat:',.0f'},showlegend:false,
     annotations:[{x:'Actual (D-SNP/MedPAC)',y:302000,text:'Duals who LIVE in PR',showarrow:false,yshift:20,font:{color:GRN,size:12,weight:700}},
                  {x:'Federal dual tables',y:13255,text:'288,745 people missing<br>96 out of every 100',showarrow:true,arrowhead:2,ax:80,ay:-60,font:{color:RED,size:11}}]},bC);

  // Chart 2: Three counts
  Plotly.newPlot('chart_duals_three',[
    {x:['Federal dual tables<br>(CMS, CY2023)','Platino enrollees<br>(ASES, Nov 2025)','D-SNP enrollees<br>(MedPAC, 2023)'],y:[13255,288427,302000],type:'bar',
     marker:{color:[RED,BLU,GRN]},
     text:['13,255','288,427','~302,000'],textposition:'outside',textfont:{size:14,family:'JetBrains Mono',weight:700},
     hovertemplate:'<b>%{x}</b><br>%{y:,.0f}<extra></extra>'}
  ],{...bL,yaxis:{...bL.yaxis,title:'Dual eligibles',tickformat:',.0f',range:[0,350000]},showlegend:false},bC);

  // Chart 3: Time comparison
  Plotly.newPlot('chart_duals_time',[
    {x:['2020','2023'],y:[276000,302000],name:'In D-SNP plans (the duals, per MedPAC)',type:'bar',
     marker:{color:GRN},text:['276,000','302,000'],textposition:'outside',
     textfont:{size:14,family:'JetBrains Mono',color:GRN},
     hovertemplate:'D-SNP %{x}: %{y:,.0f}<extra></extra>'},
    {x:['2020','2023'],y:[7767,13255],name:'In federal tables (CMS)',type:'bar',
     marker:{color:RED},text:['7,767 (2.8% visible)','13,255 (4.4% visible)'],textposition:'outside',
     textfont:{size:14,family:'JetBrains Mono',color:RED},
     hovertemplate:'Federal %{x}: %{y:,.0f}<br>Visibility: '+ ['2.8%','4.4%'][0] +'<extra></extra>'}
  ],{...bL,barmode:'group',yaxis:{...bL.yaxis,title:'Dual eligibles',tickformat:',.0f',range:[0,350000]},
     legend:{x:0.02,y:0.95,bgcolor:'rgba(255,255,255,0.9)',bordercolor:'#d8d4c8',borderwidth:1}},bC);

  // Chart 4: Rank — simplified key jurisdictions
  // Full 50-state ranking chart — CMS Medicare Monthly Enrollment CY2023
  var rN=['Puerto Rico — ACTUAL (D-SNP basis)','District of Columbia','New York','Louisiana','Connecticut','Mississippi','Maine','California','Massachusetts','New Mexico','Arkansas','Alabama','Georgia','Rhode Island','West Virginia','Kentucky','Florida','Illinois','Tennessee','Indiana','Oregon','Alaska','Pennsylvania','Arizona','Vermont','Hawaii','Michigan','Ohio','Texas','North Carolina','Oklahoma','Maryland','Missouri','Nevada','South Carolina','Washington','Wisconsin','New Jersey','Delaware','Colorado','Virginia','Minnesota','Iowa','Idaho','Kansas','Nebraska','Montana','North Dakota','South Dakota','Utah','New Hampshire','Wyoming','Puerto Rico — federal dual tables'];
  var rV=[39.5,38.8,27.5,26.8,25.7,24.9,24.2,23.8,23.1,22.8,21.3,20.8,20.2,19.8,19.5,19.2,18.9,18.5,18.1,17.4,16.8,16.5,16.2,15.9,15.7,15.4,15.1,14.8,14.7,14.6,14.5,14.4,14.2,14.0,13.8,13.7,13.6,13.5,13.3,13.1,12.9,12.7,12.5,12.3,12.0,11.8,11.5,10.9,10.7,10.5,10.4,10.4,1.7];
  var rC=rN.map(function(n){return n.indexOf('Puerto Rico')===0?'#9b2c2c':'#93a088';});
  // Override PR actual to lighter with pattern
  rC[0]='rgba(140,160,120,0.4)';
  Plotly.newPlot('chart_duals_rank',[{
    y:rN,x:rV,type:'bar',orientation:'h',showlegend:false,
    marker:{color:rC,
      pattern:{shape:rN.map(function(n,i){return i===0?'/':'';}),
               fgcolor:rN.map(function(n,i){return i===0?'#8a9e6e':'';})},
      line:{color:rN.map(function(n,i){return i===0?'#7a8e5e':(n.indexOf('federal')>-1?'#9b2c2c':'#93a088');}),width:rN.map(function(n,i){return i===0?1.5:0;})}},
    hovertemplate:'<b>%{y}</b><br>Dual share: %{x:.1f}%<extra></extra>'
  }],{paper_bgcolor:'white',plot_bgcolor:'white',
      font:{color:'#3a3a3a',family:'Inter,sans-serif',size:11},
      margin:{t:10,l:200,r:120,b:40},height:1100,
      yaxis:{gridcolor:'#ebe8e0',autorange:'reversed',tickfont:{size:10}},
      xaxis:{gridcolor:'#ebe8e0',ticksuffix:'%',range:[0,48],dtick:5},
      annotations:[
        {x:39.5,y:'Puerto Rico — ACTUAL (D-SNP basis)',text:'<b>#1 if counted — 39.5%</b>',showarrow:false,xanchor:'left',xshift:6,font:{color:'#6b7d63',size:11}},
        {x:1.7,y:'Puerto Rico — federal dual tables',text:'<b>1.7% — dead last.</b> §1905(p)(4)(A) MSP exemption: Platino duals carry no federal flag',showarrow:false,xanchor:'left',xshift:6,font:{color:'#9b2c2c',size:9.5}}
      ]},{displaylogo:false,responsive:true})

  window._dualsChartsRendered=true;
}

