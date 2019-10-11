(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{216:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"handling-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-errors","aria-hidden":"true"}},[t._v("#")]),t._v(" Handling Errors")]),t._v(" "),s("h2",{attrs:{id:"general-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-rules","aria-hidden":"true"}},[t._v("#")]),t._v(" General Rules")]),t._v(" "),s("p",[t._v("All API calls may return errors for your requests. We have standardized error format for all responses unless stated explicitly in the API call description.\nAll responses should follow this structure:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" undefined | "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* single error object */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Errors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" undefined | "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* single error object */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("Success")]),t._v(" property shows general status of the API call, whether is has succeeded or not. In most case it is enough to handle only cases with\n"),s("code",[t._v("Success == true")]),t._v(" and ignore/throw errors when "),s("code",[t._v("Success == false")]),t._v(".")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Timestamp")]),t._v(" property contains response timestamp in ISO 8601 format.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Error")]),t._v(" and "),s("code",[t._v("Errors")]),t._v(" properties are mutually exclusive and contain one or many error objects (description follows).\nAlthough "),s("code",[t._v("Errors")]),t._v(" may contain zero or one error object.")]),t._v(" "),s("p",[t._v("Every single error object has the following structure:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WellKnownError"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number | String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ErrorCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" undefined | String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" undefined | "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v(" | String\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Here the "),s("code",[t._v("WellKnownError")]),t._v(" and "),s("code",[t._v("ErrorCode")]),t._v(" are machine-readable error codes, and the "),s("code",[t._v("Message")]),t._v(" is for human use.")]),t._v(" "),s("h2",{attrs:{id:"http-status-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-status-mapping","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP Status Mapping")]),t._v(" "),s("p",[t._v("Although error/success state may be easily read from response body the HTTP status is used to indicate success too.\nSuccessful calls should end with 200 OK status, and unsuccessful ones would have 4xx or 5xx errors.")]),t._v(" "),s("h2",{attrs:{id:"universal-errors-codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#universal-errors-codes","aria-hidden":"true"}},[t._v("#")]),t._v(" Universal Errors Codes")]),t._v(" "),s("p",[t._v("Most error codes are application/call specific, however some universally returnable codes exist:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP Status Code")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Error code")]),t._v(" "),s("th",[t._v("Meaning")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("400")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("InvalidData")]),t._v(" "),s("td",[t._v("The request body cannot be parsed as JSON.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("401")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NoAuthorizationHeader")]),t._v(" "),s("td",[t._v("Your request does not include "),s("code",[t._v("Authorization")]),t._v(" HTTP header.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("401")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("BadAuthorizationType")]),t._v(" "),s("td",[t._v("HTTP Authorization scheme is not "),s("code",[t._v("Bearer")]),t._v(".")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("403")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("InvalidApiKey")]),t._v(" "),s("td",[t._v("The API key supplied in the "),s("code",[t._v("Authorization")]),t._v(" header is invalid.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("404")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NotFound")]),t._v(" "),s("td",[t._v("The endpoint specified in your request (combination of HTTP method and path) does not exist.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("429")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("RateLimitExceeded")]),t._v(" "),s("td",[t._v("Your application calls our API too fast and has exceeded "),s("a",{attrs:{href:"/general/limitations"}},[t._v("rate limit")]),t._v(".")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);