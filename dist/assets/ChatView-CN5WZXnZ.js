import{a as z,r as b,o as R,c as O,e as E,F as M,g as nt,b as st,w as ot,v as it,h as at,t as G,i as L,p as rt,j as ct,f as lt}from"./index-DcUvMSMr.js";const dt="/img/friend.jpg",ut="/img/profile.jpg";var U;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(U||(U={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(D||(D={}));var H;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(H||(H={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=["user","model","function","system"];var F;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(F||(F={}));var $;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})($||($={}));var k;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(k||(k={}));var B;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(B||(B={}));var I;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(I||(I={}));var K;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(K||(K={}));var Y;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Y||(Y={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class y extends h{constructor(e,n){super(e),this.response=n}}class Q extends h{constructor(e,n,s,o){super(e),this.status=n,this.statusText=s,this.errorDetails=o}}class C extends h{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="https://generativelanguage.googleapis.com",ht="v1beta",gt="0.16.0",_t="genai-js";var v;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(v||(v={}));class Et{constructor(e,n,s,o,i){this.model=e,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var e,n;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||ht;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ft}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function pt(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${_t}/${gt}`),e.join(" ")}async function Ct(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",pt(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new C(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new C(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new C(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function vt(t,e,n,s,o,i){const a=new Et(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},Ot(i)),{method:"POST",headers:await Ct(a),body:o})}}async function w(t,e,n,s,o,i={},a=fetch){const{url:r,fetchOptions:l}=await vt(t,e,n,s,o,i);return mt(r,l,a)}async function mt(t,e,n=fetch){let s;try{s=await n(t,e)}catch(o){yt(o,t)}return s.ok||await Rt(s,t),s}function yt(t,e){let n=t;throw t instanceof Q||t instanceof C||(n=new h(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function Rt(t,e){let n="",s;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new Q(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,s)}function Ot(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new y(`${p(t)}`,t);return It(t)}else if(t.promptFeedback)throw new y(`Text not available. ${p(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new y(`${p(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),P(t)[0]}else if(t.promptFeedback)throw new y(`Function call not available. ${p(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new y(`${p(t)}`,t);return P(t)}else if(t.promptFeedback)throw new y(`Function call not available. ${p(t)}`,t)},t}function It(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```python\n"+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function P(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const At=[I.RECITATION,I.SAFETY,I.LANGUAGE];function T(t){return!!t.finishReason&&At.includes(t.finishReason)}function p(t){var e,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];T(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function A(t){return this instanceof A?(this.v=t,this):new A(t)}function St(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,e||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(c){s[c]&&(o[c]=function(d){return new Promise(function(f,m){i.push([c,d,f,m])>1||r(c,d)})})}function r(c,d){try{l(s[c](d))}catch(f){u(i[0][3],f)}}function l(c){c.value instanceof A?Promise.resolve(c.value.v).then(g,_):u(i[0][2],c)}function g(c){r("next",c)}function _(c){r("throw",c)}function u(c,d){c(d),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function wt(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=bt(e),[s,o]=n.tee();return{stream:Tt(s),response:Nt(o)}}async function Nt(t){const e=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return x(xt(e));e.push(o)}}function Tt(t){return St(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield A(n.read());if(o)break;yield yield A(x(s))}})}function bt(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new h("Failed to parse stream"));return}s.close();return}o+=a;let l=o.match(q),g;for(;l;){try{g=JSON.parse(l[1])}catch{s.error(new h(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(g),o=o.substring(l[0].length),l=o.match(q)}return i()})}}})}function xt(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e,n,s){const o=await w(e,v.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s);return wt(o)}async function tt(t,e,n,s){const i=await(await w(e,v.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)).json();return{response:x(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function S(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Mt(e)}function Mt(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new h("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new h("No content is provided for sending chat message.");return s?e:n}function Gt(t,e){var n;let s={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new C("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{const i=S(t);s.contents=[i]}return{generateContentRequest:s}}function V(t){let e;return t.contents?e=t:e={contents:[S(t)]},t.systemInstruction&&(e.systemInstruction=et(t.systemInstruction)),e}function Lt(t){return typeof t=="string"||Array.isArray(t)?{content:S(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ut={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Dt(t){let e=!1;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new h(`First content should be with role 'user', got ${s}`);if(!j.includes(s))throw new h(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(j)}`);if(!Array.isArray(o))throw new h("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new h("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const l of J)l in r&&(i[l]+=1);const a=Ut[s];for(const r of J)if(!a.includes(r)&&i[r]>0)throw new h(`Content with role '${s}' can't contain '${r}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="SILENT_ERROR";class Ht{constructor(e,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(Dt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var s,o,i,a,r,l;await this._sendPromise;const g=S(e),_={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,g]},u=Object.assign(Object.assign({},this._requestOptions),n);let c;return this._sendPromise=this._sendPromise.then(()=>tt(this._apiKey,this.model,_,u)).then(d=>{var f;if(d.response.candidates&&d.response.candidates.length>0){this._history.push(g);const m=Object.assign({parts:[],role:"model"},(f=d.response.candidates)===null||f===void 0?void 0:f[0].content);this._history.push(m)}else{const m=p(d.response);m&&console.warn(`sendMessage() was unsuccessful. ${m}. Inspect response object for details.`)}c=d}),await this._sendPromise,c}async sendMessageStream(e,n={}){var s,o,i,a,r,l;await this._sendPromise;const g=S(e),_={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,g]},u=Object.assign(Object.assign({},this._requestOptions),n),c=Z(this._apiKey,this.model,_,u);return this._sendPromise=this._sendPromise.then(()=>c).catch(d=>{throw new Error(W)}).then(d=>d.response).then(d=>{if(d.candidates&&d.candidates.length>0){this._history.push(g);const f=Object.assign({},d.candidates[0].content);f.role||(f.role="model"),this._history.push(f)}else{const f=p(d);f&&console.warn(`sendMessageStream() was unsuccessful. ${f}. Inspect response object for details.`)}}).catch(d=>{d.message!==W&&console.error(d)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t,e,n,s){return(await w(e,v.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e,n,s){return(await w(e,v.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function $t(t,e,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await w(e,v.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n,s={}){this.apiKey=e,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=et(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var s;const o=V(e),i=Object.assign(Object.assign({},this._requestOptions),n);return tt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(e,n={}){var s;const o=V(e),i=Object.assign(Object.assign({},this._requestOptions),n);return Z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(e){var n;return new Ht(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this.requestOptions)}async countTokens(e,n={}){const s=Gt(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return jt(this.apiKey,this.model,s,o)}async embedContent(e,n={}){const s=Lt(e),o=Object.assign(Object.assign({},this._requestOptions),n);return Ft(this.apiKey,this.model,s,o)}async batchEmbedContents(e,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return $t(this.apiKey,this.model,e,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new h("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new X(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n){if(!e.name)throw new C("Cached content must contain a `name` field.");if(!e.model)throw new C("Cached content must contain a `model` field.");const s={model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e};return new X(this.apiKey,s,n)}}const N=t=>(rt("data-v-ff64db86"),t=t(),ct(),t),Bt={class:"flex flex-col justify-center justify-items-center px-3 pt-8 pb-16 w-full"},Kt={key:0,class:"flex flex-row self-end mb-2"},Yt={class:"max-w-80 bg-blue-200 text-md py-4 px-2 rounded"},Pt=N(()=>E("span",{class:"triangle_right mt-[-11px]"},null,-1)),qt=N(()=>E("img",{src:dt,alt:"Friend",class:"max-w-16 h-16 w-16 ml-1 rounded-full"},null,-1)),Vt={key:1,class:"flex flex-row self-start mb-2"},Jt=N(()=>E("img",{src:ut,alt:"Friend",class:"max-w-16 h-16 w-16 mr-1 rounded-full"},null,-1)),Wt=N(()=>E("span",{class:"triangle_left mt-[-11px]"},null,-1)),Xt={class:"max-w-80 bg-white py-4 px-2 rounded"},zt={class:"flex justify-center fixed bottom-0 w-full max-w-lg bg-slate-900 p-2"},Qt=N(()=>E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#fff",class:"size-6"},[E("path",{d:"M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"})],-1)),Zt=[Qt],te=z({__name:"GeminiChatComponent",setup(t){const e=b(""),n=b(null);let s=b([{}]);const o="AIzaSyCsVSW4Ur1SV-Ui5Etgg_O07ehihHoMsGg",r=new kt(o).getGenerativeModel({model:"gemini-1.5-flash"}).startChat({history:[],generationConfig:{maxOutputTokens:100}}),l=async()=>{const g=e.value;s.value.push({role:"user",parts:[{text:g}]},{role:"model",parts:[{text:"Thinking..."}]}),await r.sendMessage(e.value);const _=await r.getHistory();s.value=[..._],e.value=""};return(g,_)=>(R(),O(M,null,[E("article",Bt,[(R(!0),O(M,null,nt(st(s),(u,c)=>(R(),O("section",{class:"flex flex-col justify-between",key:c},[u.role==="model"?(R(),O("div",Kt,[E("span",Yt,G(u.parts[0].text),1),Pt,qt])):L("",!0),u.role==="user"?(R(),O("div",Vt,[Jt,Wt,E("span",Xt,G(u.parts[0].text),1)])):L("",!0)]))),128))]),E("section",zt,[ot(E("input",{type:"text",placeholder:"Write a message...",class:"block w-full max-w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6","onUpdate:modelValue":_[0]||(_[0]=u=>e.value=u),onKeyup:_[1]||(_[1]=at(u=>l(),["enter"])),ref_key:"inputPrompt",ref:n},null,544),[[it,e.value]]),E("button",{onClick:l,type:"button",class:"ml-2"},Zt)])],64))}}),ee=(t,e)=>{const n=t.__vccOpts||t;for(const[s,o]of e)n[s]=o;return n},ne=ee(te,[["__scopeId","data-v-ff64db86"]]),oe=z({__name:"ChatView",setup(t){return(e,n)=>(R(),O("main",null,[lt(ne)]))}});export{oe as default};
