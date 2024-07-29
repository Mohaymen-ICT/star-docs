"use strict";(self.webpackChunkstar_docs=self.webpackChunkstar_docs||[]).push([[1017],{8385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=t(4848),o=t(8453);const d={},c="dotnet-dump",i={id:"checklists/debugging/backend/dotnet-tools/dotnet-dump",title:"dotnet-dump",description:"\u0628\u0631\u0627\u06cc \u0628\u0627\u06af\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u0633\u0626\u0644\u0647\u200c\u06cc \u062d\u0627\u0641\u0638\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u0648 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0642\u06cc\u0642\u0627 \u0634\u06cc\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 \u062d\u0627\u0641\u0638\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u0631\u0627 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645. \u0627\u0632 \u0627\u0628\u0632\u0627\u0631",source:"@site/engineering/02-checklists/debugging/backend/dotnet-tools/dotnet-dump.md",sourceDirName:"02-checklists/debugging/backend/dotnet-tools",slug:"/checklists/debugging/backend/dotnet-tools/dotnet-dump",permalink:"/star-docs/engineering/checklists/debugging/backend/dotnet-tools/dotnet-dump",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentsSidebar",previous:{title:"dotnet-counters",permalink:"/star-docs/engineering/checklists/debugging/backend/dotnet-tools/dotnet-counters"},next:{title:"dotnet-trace",permalink:"/star-docs/engineering/checklists/debugging/backend/dotnet-tools/dotnet-trace"}},r={},l=[{value:"\u0646\u0635\u0628 \u0627\u0628\u0632\u0627\u0631 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645",id:"\u0646\u0635\u0628-\u0627\u0628\u0632\u0627\u0631-\u062f\u0631-\u0633\u06cc\u0633\u062a\u0645",level:2},{value:"\u062a\u062d\u0644\u06cc\u0644 \u0644\u0627\u06af \u0641\u0627\u06cc\u0644 \u062f\u0627\u0645\u067e",id:"\u062a\u062d\u0644\u06cc\u0644-\u0644\u0627\u06af-\u0641\u0627\u06cc\u0644-\u062f\u0627\u0645\u067e",level:2},{value:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0645\u062d\u06cc\u0637 \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc",id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u062f\u0631-\u0645\u062d\u06cc\u0637-\u0639\u0645\u0644\u06cc\u0627\u062a\u06cc",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dotnet-dump",children:"dotnet-dump"}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0628\u0627\u06af\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u0633\u0626\u0644\u0647\u200c\u06cc \u062d\u0627\u0641\u0638\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u0648 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0642\u06cc\u0642\u0627 \u0634\u06cc\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 \u062d\u0627\u0641\u0638\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u0631\u0627 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645. \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\ndotnet-dump\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645."}),"\n",(0,s.jsx)(n.h2,{id:"\u0646\u0635\u0628-\u0627\u0628\u0632\u0627\u0631-\u062f\u0631-\u0633\u06cc\u0633\u062a\u0645",children:"\u0646\u0635\u0628 \u0627\u0628\u0632\u0627\u0631 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645"}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0646\u0635\u0628 \u0627\u0628\u0632\u0627\u0631 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet tool install --global dotnet-dump\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u067e\u0633 \u0627\u0632 \u0622\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0645\u062e\u062a\u0644\u0641 \u0627\u06cc\u0646 \u0627\u0628\u0632\u0627\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645."}),"\n",(0,s.jsxs)(n.p,{children:["\u0644\u06cc\u0646\u06a9 \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u06a9\u0627\u0645\u0644 \u0627\u06cc\u0646 \u0627\u0628\u0632\u0627\u0631 \u062f\u0631\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump",children:"\u0627\u06cc\u0646 \u0635\u0641\u062d\u0647"}),"\n\u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f."]}),"\n",(0,s.jsx)(n.h2,{id:"\u062a\u062d\u0644\u06cc\u0644-\u0644\u0627\u06af-\u0641\u0627\u06cc\u0644-\u062f\u0627\u0645\u067e",children:"\u062a\u062d\u0644\u06cc\u0644 \u0644\u0627\u06af \u0641\u0627\u06cc\u0644 \u062f\u0627\u0645\u067e"}),"\n",(0,s.jsxs)(n.p,{children:["\u0627\u0628\u0632\u0627\u0631\ndotnet-dump\n\u0628\u0647 \u0634\u0645\u0627 \u0627\u0645\u06a9\u0627\u0646 \u0628\u0631\u0631\u0633\u06cc \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u062f\u0627\u0645\u067e \u0631\u0627 \u0645\u06cc\u200c\u062f\u0647\u062f \u0648 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0627\u0632 \u0631\u0627\u0647 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062e\u0648\u0628\u06cc \u0627\u0632 \u0641\u0627\u06cc\u0644 \u0627\u0633\u062a\u062e\u0631\u0627\u062c \u06a9\u0631\u062f.\n\u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0648 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0627\u06cc\u0646 \u0627\u0628\u0632\u0627\u0631 \u062f\u0631\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump#dotnet-dump-analyze",children:"\u0627\u06cc\u0646 \u0633\u0627\u06cc\u062a"}),"\n\u0648 \u0628\u0647 \u0635\u0648\u0631\u062a \u0645\u0641\u0635\u0644\u200c\u062a\u0631 \u062f\u0631\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump#analyze-sos-commands",children:"\u0627\u06cc\u0646 \u0635\u0641\u062d\u0647"}),"\n\u0648\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/sos-debugging-extension",children:"\u0627\u06cc\u0646 \u0635\u0641\u062d\u0647"}),"\n\u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647 \u0627\u0633\u062a."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u062f\u0631-\u0645\u062d\u06cc\u0637-\u0639\u0645\u0644\u06cc\u0627\u062a\u06cc",children:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0645\u062d\u06cc\u0637 \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0644\u062d\u0638\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0686\u0627\u0631 \u0645\u0634\u06a9\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u06cc\u06a9 \u062f\u0633\u062a\u0648\u0631\u06cc \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0628\u0632\u0646\u06cc\u0645 \u06a9\u0647 \u0628\u0627\u0639\u062b \u0645\u06cc\u200c\u0634\u0648\u062f \u0641\u0627\u06cc\u0644 \u0644\u0627\u06af \u062f\u0627\u0645\u067e \u062a\u0647\u06cc\u0647 \u0634\u0648\u062f.\n\u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u06cc\u06a9 \u0644\u0627\u06af \u0628\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0634\u062e\u0635\u06cc \u0627\u0632 \u062d\u0627\u0641\u0638\u0647 \u0628\u0647 \u0635\u0648\u0631\u062a \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0630\u062e\u06cc\u0631\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0633\u067e\u0633 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u0641\u0627\u06cc\u0644 \u0631\u0627 \u0627\u0632 \u062f\u0627\u062e\u0644 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u062e\u0627\u0631\u062c \u06a9\u0646\u06cc\u0645 \u062a\u0627 \u0628\u062a\u0648\u0627\u0646\u06cc\u0645 \u0622\u0646\u200c\u0631\u0627 \u062a\u062d\u0644\u06cc\u0644 \u06a9\u0646\u06cc\u0645."}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a \u0641\u0627\u06cc\u0644 \u062f\u0627\u0645\u067e \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0627\u0633\u062a."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet-dump collect -p 1 \n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0647\u0645\u200c\u0686\u0646\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u062a\u0639\u06cc\u06cc\u0646 \u0646\u0648\u0639 \u0644\u0627\u06af\u200c\u06af\u06cc\u0631\u06cc \u0648 \u062c\u0632\u0626\u06cc\u0627\u062a \u0622\u0646 \u0631\u0627 \u062f\u0631 \u062f\u0633\u062a\u0648\u0631 \u062a\u0639\u06cc\u06cc\u0646 \u06a9\u0631\u062f. \u06a9\u0647 \u062f\u0631\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump#synopsis-1",children:"\u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9"}),"\n\u0628\u0647 \u0635\u0648\u0631\u062a \u0645\u0641\u0635\u0644 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a."]}),"\n",(0,s.jsxs)(n.p,{children:["\u062f\u0631 \u0635\u0648\u0631\u062a \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0646\u062a\u0647\u0627\u06cc \u0641\u0627\u06cc\u0644 \u0641\u0631\u0645\u062a\n",(0,s.jsx)(n.code,{children:".dmp"}),"\n\u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f. \u067e\u0633 \u0627\u0632 \u0622\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0641\u0627\u06cc\u0644 \u0631\u0627 \u0628\u0627\nVisual studio\n\u06cc\u0627 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631\n\u0628\u0627\u0632 \u06a9\u0631\u062f."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(6540);const o={},d=s.createContext(o);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);