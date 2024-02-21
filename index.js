// page one code

const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  autoplay: {
    delay: 5000,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  allowTouchMove: false,
});

// services code

const servicesEl = document.getElementById("services");


const svgs = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="58.984" height="59.972" viewBox="0 0 58.984 59.972">
  <path id="Forma_1" data-name="Forma 1" d="M842.7,2704a1.034,1.034,0,0,0-.916.523l-1.666,2.84a5.163,5.163,0,0,0-5.1,8.7l-6.719,11.45a7.236,7.236,0,0,0-10.361,5.341l-7.34-1.158a5.172,5.172,0,1,0-9.108,3.569l-8.254,10.5a1.034,1.034,0,0,0,1.607,1.3.269.269,0,0,0,.02-.025l8.252-10.494a5.13,5.13,0,0,0,2.315.551,5.192,5.192,0,0,0,4.843-3.358l7.637,1.2a7.24,7.24,0,1,0,12.1-6.249l6.775-11.548a5.163,5.163,0,0,0,5.14-8.761l1.651-2.812A1.035,1.035,0,0,0,842.7,2704Zm-4.162,5.182a3.105,3.105,0,0,1,1.361.312,1.048,1.048,0,0,0,.3.166,3.106,3.106,0,0,1-3.129,5.361,1.032,1.032,0,0,0-.32-.2,3.1,3.1,0,0,1,1.787-5.642Zm0,.517a2.593,2.593,0,0,0-2.587,2.585.517.517,0,0,0,1.035.013v-.014a1.544,1.544,0,0,1,1.552-1.551.517.517,0,1,0,.014-1.033Zm-2.925,17.415a1.035,1.035,0,0,0-.679,1.792,12.755,12.755,0,1,1-21.328,11.7,1.035,1.035,0,0,0-2.036.369c0,.012,0,.022.007.034a14.828,14.828,0,0,0,21.95,9.949l11.132,12.66a1.037,1.037,0,0,0,1.46.093c.017-.015.033-.029.048-.046l5.518-5.514a1.032,1.032,0,0,0,0-1.461l-.034-.032-12.523-11.421c.137-.25.27-.5.394-.764a14.818,14.818,0,0,0-3.16-17.069A1.036,1.036,0,0,0,835.616,2727.117Zm-30.183,1.71a3.1,3.1,0,1,1-1.766,5.657h0a1.031,1.031,0,0,0-.291-.23,3.1,3.1,0,0,1,2.058-5.426Zm19.658,0a5.159,5.159,0,0,1,2.816.827,1.037,1.037,0,0,0,.339.238,5.173,5.173,0,1,1-8.322,4.328,1.027,1.027,0,0,0,0-.348A5.154,5.154,0,0,1,825.09,2728.828Zm-19.658.517a2.592,2.592,0,0,0-2.586,2.583.517.517,0,0,0,1.034.015v-.015a1.544,1.544,0,0,1,1.552-1.551.517.517,0,1,0,.015-1.034A.042.042,0,0,1,805.432,2729.345Zm19.658,1.032a3.628,3.628,0,0,0-3.621,3.619.517.517,0,0,0,1.035.015V2734a2.578,2.578,0,0,1,2.587-2.585.517.517,0,1,0,.014-1.034Zm11.427,7.23a.516.516,0,0,0-.509.523,9.872,9.872,0,0,1-9.883,9.876.517.517,0,1,0-.015,1.033h.015a10.921,10.921,0,0,0,10.918-10.909.517.517,0,0,0-.51-.523Zm1.48,9.4,9.054,8.256-3.846,3.571-7.947-9.037A14.749,14.749,0,0,0,838,2747.011Zm9.821,8.957,1.641,1.5-3.972,3.969-1.6-1.817Z" transform="translate(-793.006 -2704.004)" fill="#15263e"/>
</svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
<path id="Forma_1" data-name="Forma 1" d="M556.724,2363.744l-4.664-4.664a1.106,1.106,0,0,0-1.566,0l-1.824,1.824a25.056,25.056,0,0,0-23.084-2.866l7.174-7.173a3.61,3.61,0,1,0-1.566-1.568l-11.332,11.332-1.549-1.548a1.107,1.107,0,0,0-1.566,0l-4.664,4.664a1.107,1.107,0,0,0,0,1.567l1.549,1.549L502.3,2378.19a3.609,3.609,0,1,0,1.566,1.567l7.174-7.175a25.058,25.058,0,0,0,2.866,23.085l-1.824,1.823a1.109,1.109,0,0,0,0,1.568l4.664,4.663a1.107,1.107,0,0,0,1.566,0l4.664-4.663a1.109,1.109,0,0,0,0-1.568l-4.664-4.664a1.106,1.106,0,0,0-1.566,0l-1.244,1.244a22.811,22.811,0,0,1,0-25.34l1.244,1.244a1.109,1.109,0,0,0,1.566,0l4.664-4.665a1.108,1.108,0,0,0,0-1.567l-1.244-1.244a22.814,22.814,0,0,1,25.341,0l-1.244,1.244a1.107,1.107,0,0,0,0,1.566l4.664,4.665a1.109,1.109,0,0,0,1.566,0l4.664-4.665A1.107,1.107,0,0,0,556.724,2363.744Zm-39.194,31.434,3.1,3.1-3.1,3.1-3.1-3.1Zm15.889-48.508a1.392,1.392,0,1,1,0,1.97h0A1.394,1.394,0,0,1,533.419,2346.669Zm-31.778,35.716a1.391,1.391,0,1,1,0-1.97h0A1.4,1.4,0,0,1,501.641,2382.386Zm15.889-14.76-1.549-1.548h0l-1.549-1.55,3.1-3.1,1.546,1.547,0,0,0,0,.142.141.009.008,1.4,1.4Zm33.747,0-3.1-3.1,3.1-3.1,3.1,3.1Z" transform="translate(-497.049 -2344.047)" fill="#15263e"/>
</svg>`,
  `
<svg xmlns="http://www.w3.org/2000/svg" width="55.023" height="60.999" viewBox="0 0 55.023 60.999">
  <path id="Forma_1" data-name="Forma 1" d="M1385.746,2405.013a.753.753,0,0,1-.758-.746v-59.506a.752.752,0,0,1,.758-.747h8.69a.751.751,0,0,1,.758.747v14.914l3.025,2.981,1.8-1.777a.766.766,0,0,1,1.072,0,.742.742,0,0,1,0,1.058l-1.8,1.777,10.046,9.9,2.5-6.179a.741.741,0,0,1,.168-.252l22.776-22.454a.766.766,0,0,1,1.072,0l3.941,3.885a.739.739,0,0,1,0,1.057l-22.776,22.454a.763.763,0,0,1-.255.167l-6.269,2.46,22.692,22.37a.74.74,0,0,1,0,1.057.766.766,0,0,1-1.072,0l-2.117-2.087h-34.8v8.173a.752.752,0,0,1-.758.746Zm.758-1.494h7.174v-58.01H1386.5v1.328h1.3a.747.747,0,1,1,0,1.494h-1.3v2.354h1.3a.747.747,0,1,1,0,1.494h-1.3v2.353h1.3a.747.747,0,1,1,0,1.494h-1.3v2.354h1.3a.747.747,0,1,1,0,1.493h-1.3v2.354h1.3a.748.748,0,1,1,0,1.495h-1.3v2.352h1.3a.748.748,0,1,1,0,1.495h-1.3v2.353h1.3a.747.747,0,1,1,0,1.494h-1.3v2.354h1.3a.748.748,0,1,1,0,1.495h-1.3v2.352h1.3a.747.747,0,1,1,0,1.494h-1.3v2.353h1.3a.747.747,0,1,1,0,1.494h-1.3v2.353h1.3a.747.747,0,1,1,0,1.494h-1.3v2.353h1.3a.748.748,0,1,1,0,1.5h-1.3V2393h1.3a.747.747,0,1,1,0,1.494h-1.3v2.353h1.3a.748.748,0,1,1,0,1.5h-1.3v2.352h1.3a.747.747,0,1,1,0,1.494h-1.3Zm8.689-8.919h33.282l-3.688-3.637-2.156,2.126a.767.767,0,0,1-1.072,0,.739.739,0,0,1,0-1.057l2.156-2.126-1.687-1.663-2.156,2.125a.764.764,0,0,1-1.072,0,.739.739,0,0,1,0-1.056l2.156-2.126-1.687-1.663-2.156,2.126a.766.766,0,0,1-1.072,0,.738.738,0,0,1,0-1.056l2.156-2.127-1.687-1.663-2.156,2.126a.766.766,0,0,1-1.072,0,.739.739,0,0,1,0-1.057l2.157-2.127-1.687-1.662-2.157,2.126a.766.766,0,0,1-1.072,0,.743.743,0,0,1,0-1.058l2.157-2.126-1.687-1.663-2.156,2.127a.764.764,0,0,1-1.072,0,.741.741,0,0,1,0-1.058l2.156-2.125-1.687-1.663-2.156,2.126a.768.768,0,0,1-1.072,0,.741.741,0,0,1,0-1.058l2.156-2.125-1.687-1.663-2.156,2.126a.766.766,0,0,1-1.072,0,.739.739,0,0,1,0-1.056l2.156-2.127-1.687-1.662-2.156,2.125a.763.763,0,0,1-1.072,0,.739.739,0,0,1,0-1.056l2.157-2.125-1.687-1.663-2.156,2.126a.766.766,0,0,1-1.072,0,.741.741,0,0,1,0-1.058l2.156-2.126-3.689-3.637Zm16.091-21.767,3.843-1.51-2.313-2.278Zm4.295-3.177.9.885,18.847-18.579-.9-.887Zm-1.971-1.944.9.886,18.847-18.58-.9-.885Zm19.919-19.636,2.869,2.829,1.785-1.761-2.868-2.826Zm4.671,56.108-.048-.047a.742.742,0,0,1,0-1.058.768.768,0,0,1,1.071,0l.048.048a.74.74,0,0,1,0,1.058.767.767,0,0,1-1.072,0Zm-1.9-1.873-2.339-2.306a.739.739,0,0,1,0-1.056.763.763,0,0,1,1.072,0l2.338,2.307a.737.737,0,0,1,0,1.055.765.765,0,0,1-1.071,0Zm-35.3-12.69a.753.753,0,0,1-.758-.748v-13.261a.747.747,0,0,1,.468-.69.768.768,0,0,1,.826.161l13.451,13.262a.741.741,0,0,1,.164.814.759.759,0,0,1-.7.462Zm.758-1.495h10.864l-10.864-10.71Zm.113-28.016a.738.738,0,0,1,0-1.056l2.338-2.308a.766.766,0,0,1,1.072,0,.74.74,0,0,1,0,1.057l-2.338,2.306a.766.766,0,0,1-1.072,0Zm4.189-4.131a.741.741,0,0,1,0-1.057l2.339-2.306a.766.766,0,0,1,1.072,0,.74.74,0,0,1,0,1.057l-2.339,2.3a.766.766,0,0,1-1.072,0Zm4.19-4.13a.739.739,0,0,1,0-1.056l2.339-2.307a.766.766,0,0,1,1.072,0,.741.741,0,0,1,0,1.058l-2.339,2.306a.766.766,0,0,1-1.072,0Zm4.19-4.131a.739.739,0,0,1,0-1.057l.121-.121a.768.768,0,0,1,1.072,0,.742.742,0,0,1,0,1.058l-.121.118a.765.765,0,0,1-1.072,0Z" transform="translate(-1384.988 -2344.014)" fill="#15263e"/>
</svg>
`,
`
<svg xmlns="http://www.w3.org/2000/svg" width="47" height="60" viewBox="0 0 47 60">
  <path id="Forma_1" data-name="Forma 1" d="M522.918,2760.17a4.65,4.65,0,0,1-3.84-4.567V2749.3a23.724,23.724,0,0,1-10.332-7.756A23.167,23.167,0,0,1,504,2727.422a23.5,23.5,0,0,1,47,0,23.172,23.172,0,0,1-4.747,14.12,23.741,23.741,0,0,1-10.33,7.754v6.306a6.92,6.92,0,0,1-13,4.567Zm4.582,2.066a2.889,2.889,0,0,0,2.747-2h-5.494A2.889,2.889,0,0,0,527.5,2762.237Zm-6.656-6.634a2.885,2.885,0,0,0,2.886,2.876h7.538a2.885,2.885,0,0,0,2.886-2.876v-1.938h-1.944a.881.881,0,1,1,0-1.762h1.944v-2H520.844v2h7.6a.881.881,0,1,1,0,1.762h-7.6Zm-15.078-28.181a21.431,21.431,0,0,0,4.388,13.056,21.918,21.918,0,0,0,11,7.669h12.7a21.917,21.917,0,0,0,11-7.668,21.431,21.431,0,0,0,4.389-13.057,21.733,21.733,0,0,0-43.466,0Zm19.5,15.837c-.579-.23-.8-.824-.662-1.767l1.282-11.311h-5.8a1.728,1.728,0,0,1-1.508-2.881l9.3-13c.547-.784,1.122-1.066,1.706-.834s.8.827.661,1.771l-1.169,9.427h6.792a1.729,1.729,0,0,1,1.508,2.882l-10.4,14.873a1.738,1.738,0,0,1-1.318.92A1.054,1.054,0,0,1,525.263,2743.26Zm-5.249-14.944c-.025.035-.045.069-.061.1a1.01,1.01,0,0,0,.125.007h6.793a.884.884,0,0,1,.878.979l-1.194,10.537,9.366-13.4a.9.9,0,0,0,.066-.106c-.035,0-.076-.005-.124-.005h-7.791a.883.883,0,0,1-.878-.989l1.074-8.658Zm22.491-10.741a17.982,17.982,0,0,0-4.226-4.478.882.882,0,1,1,1.061-1.408,19.759,19.759,0,0,1,4.64,4.917.883.883,0,0,1-1.475.97ZM534.683,2711a17.932,17.932,0,0,0-2.691-.923.881.881,0,1,1,.44-1.707,19.852,19.852,0,0,1,2.959,1.016.881.881,0,1,1-.708,1.614Z" transform="translate(-504 -2703.998)" fill="#15263e"/>
</svg>
`,
`<svg xmlns="http://www.w3.org/2000/svg" width="58.984" height="59.972" viewBox="0 0 58.984 59.972">
<path id="Forma_1" data-name="Forma 1" d="M842.7,2704a1.034,1.034,0,0,0-.916.523l-1.666,2.84a5.163,5.163,0,0,0-5.1,8.7l-6.719,11.45a7.236,7.236,0,0,0-10.361,5.341l-7.34-1.158a5.172,5.172,0,1,0-9.108,3.569l-8.254,10.5a1.034,1.034,0,0,0,1.607,1.3.269.269,0,0,0,.02-.025l8.252-10.494a5.13,5.13,0,0,0,2.315.551,5.192,5.192,0,0,0,4.843-3.358l7.637,1.2a7.24,7.24,0,1,0,12.1-6.249l6.775-11.548a5.163,5.163,0,0,0,5.14-8.761l1.651-2.812A1.035,1.035,0,0,0,842.7,2704Zm-4.162,5.182a3.105,3.105,0,0,1,1.361.312,1.048,1.048,0,0,0,.3.166,3.106,3.106,0,0,1-3.129,5.361,1.032,1.032,0,0,0-.32-.2,3.1,3.1,0,0,1,1.787-5.642Zm0,.517a2.593,2.593,0,0,0-2.587,2.585.517.517,0,0,0,1.035.013v-.014a1.544,1.544,0,0,1,1.552-1.551.517.517,0,1,0,.014-1.033Zm-2.925,17.415a1.035,1.035,0,0,0-.679,1.792,12.755,12.755,0,1,1-21.328,11.7,1.035,1.035,0,0,0-2.036.369c0,.012,0,.022.007.034a14.828,14.828,0,0,0,21.95,9.949l11.132,12.66a1.037,1.037,0,0,0,1.46.093c.017-.015.033-.029.048-.046l5.518-5.514a1.032,1.032,0,0,0,0-1.461l-.034-.032-12.523-11.421c.137-.25.27-.5.394-.764a14.818,14.818,0,0,0-3.16-17.069A1.036,1.036,0,0,0,835.616,2727.117Zm-30.183,1.71a3.1,3.1,0,1,1-1.766,5.657h0a1.031,1.031,0,0,0-.291-.23,3.1,3.1,0,0,1,2.058-5.426Zm19.658,0a5.159,5.159,0,0,1,2.816.827,1.037,1.037,0,0,0,.339.238,5.173,5.173,0,1,1-8.322,4.328,1.027,1.027,0,0,0,0-.348A5.154,5.154,0,0,1,825.09,2728.828Zm-19.658.517a2.592,2.592,0,0,0-2.586,2.583.517.517,0,0,0,1.034.015v-.015a1.544,1.544,0,0,1,1.552-1.551.517.517,0,1,0,.015-1.034A.042.042,0,0,1,805.432,2729.345Zm19.658,1.032a3.628,3.628,0,0,0-3.621,3.619.517.517,0,0,0,1.035.015V2734a2.578,2.578,0,0,1,2.587-2.585.517.517,0,1,0,.014-1.034Zm11.427,7.23a.516.516,0,0,0-.509.523,9.872,9.872,0,0,1-9.883,9.876.517.517,0,1,0-.015,1.033h.015a10.921,10.921,0,0,0,10.918-10.909.517.517,0,0,0-.51-.523Zm1.48,9.4,9.054,8.256-3.846,3.571-7.947-9.037A14.749,14.749,0,0,0,838,2747.011Zm9.821,8.957,1.641,1.5-3.972,3.969-1.6-1.817Z" transform="translate(-793.006 -2704.004)" fill="#15263e"/>
</svg>
`,
`<svg xmlns="http://www.w3.org/2000/svg" width="63.997" height="59" viewBox="0 0 63.997 59">
<path id="Forma_1" data-name="Forma 1" d="M1086.953,2763a.942.942,0,0,1-.952-.931V2704.93a.952.952,0,0,1,1.9,0V2710h2.551a.311.311,0,1,1,0,.622h-2.551v5.589h2.551a.31.31,0,1,1,0,.62h-2.551v5.591h2.551a.31.31,0,1,1,0,.62h-2.551v5.59h2.551a.31.31,0,1,1,0,.62h-2.551v5.59h2.551a.311.311,0,1,1,0,.623h-2.551v5.588h2.551a.311.311,0,1,1,0,.622h-2.551v5.589h2.551a.311.311,0,1,1,0,.621h-2.551v5.59h2.551a.311.311,0,1,1,0,.621h-2.551v7.037h11.536v-3a.317.317,0,0,1,.635,0v3h5.715v-3a.318.318,0,0,1,.635,0v3h5.714v-3a.318.318,0,0,1,.635,0v3h5.715v-3a.318.318,0,0,1,.635,0v3h5.714v-3a.318.318,0,0,1,.635,0v3h5.715v-3a.317.317,0,0,1,.635,0v3h5.715v-3a.318.318,0,0,1,.635,0v3h5.714v-3a.318.318,0,0,1,.635,0v3h4.522a.932.932,0,1,1,0,1.864Zm50.1-7.826V2723.5h7.779v31.673Zm1.27-1.242h5.239v-4.349h-5.239Zm-15.557,1.242v-35.865h7.779v35.865Zm1.27-1.242h5.239v-21.582h-5.239Zm-14.922,1.242v-27.017h7.779v27.017Zm1.27-1.242h5.239v-12.111h-5.239Zm-15.08,1.242v-43.347h7.778v43.347Zm1.27-1.242h5.238v-28.441h-5.238Z" transform="translate(-1086.001 -2703.998)" fill="#15263e"/>
</svg>
`,
`<svg xmlns="http://www.w3.org/2000/svg" width="58.984" height="59.972" viewBox="0 0 58.984 59.972">
  <path id="Forma_1" data-name="Forma 1" d="M842.7,2704a1.034,1.034,0,0,0-.916.523l-1.666,2.84a5.163,5.163,0,0,0-5.1,8.7l-6.719,11.45a7.236,7.236,0,0,0-10.361,5.341l-7.34-1.158a5.172,5.172,0,1,0-9.108,3.569l-8.254,10.5a1.034,1.034,0,0,0,1.607,1.3.269.269,0,0,0,.02-.025l8.252-10.494a5.13,5.13,0,0,0,2.315.551,5.192,5.192,0,0,0,4.843-3.358l7.637,1.2a7.24,7.24,0,1,0,12.1-6.249l6.775-11.548a5.163,5.163,0,0,0,5.14-8.761l1.651-2.812A1.035,1.035,0,0,0,842.7,2704Zm-4.162,5.182a3.105,3.105,0,0,1,1.361.312,1.048,1.048,0,0,0,.3.166,3.106,3.106,0,0,1-3.129,5.361,1.032,1.032,0,0,0-.32-.2,3.1,3.1,0,0,1,1.787-5.642Zm0,.517a2.593,2.593,0,0,0-2.587,2.585.517.517,0,0,0,1.035.013v-.014a1.544,1.544,0,0,1,1.552-1.551.517.517,0,1,0,.014-1.033Zm-2.925,17.415a1.035,1.035,0,0,0-.679,1.792,12.755,12.755,0,1,1-21.328,11.7,1.035,1.035,0,0,0-2.036.369c0,.012,0,.022.007.034a14.828,14.828,0,0,0,21.95,9.949l11.132,12.66a1.037,1.037,0,0,0,1.46.093c.017-.015.033-.029.048-.046l5.518-5.514a1.032,1.032,0,0,0,0-1.461l-.034-.032-12.523-11.421c.137-.25.27-.5.394-.764a14.818,14.818,0,0,0-3.16-17.069A1.036,1.036,0,0,0,835.616,2727.117Zm-30.183,1.71a3.1,3.1,0,1,1-1.766,5.657h0a1.031,1.031,0,0,0-.291-.23,3.1,3.1,0,0,1,2.058-5.426Zm19.658,0a5.159,5.159,0,0,1,2.816.827,1.037,1.037,0,0,0,.339.238,5.173,5.173,0,1,1-8.322,4.328,1.027,1.027,0,0,0,0-.348A5.154,5.154,0,0,1,825.09,2728.828Zm-19.658.517a2.592,2.592,0,0,0-2.586,2.583.517.517,0,0,0,1.034.015v-.015a1.544,1.544,0,0,1,1.552-1.551.517.517,0,1,0,.015-1.034A.042.042,0,0,1,805.432,2729.345Zm19.658,1.032a3.628,3.628,0,0,0-3.621,3.619.517.517,0,0,0,1.035.015V2734a2.578,2.578,0,0,1,2.587-2.585.517.517,0,1,0,.014-1.034Zm11.427,7.23a.516.516,0,0,0-.509.523,9.872,9.872,0,0,1-9.883,9.876.517.517,0,1,0-.015,1.033h.015a10.921,10.921,0,0,0,10.918-10.909.517.517,0,0,0-.51-.523Zm1.48,9.4,9.054,8.256-3.846,3.571-7.947-9.037A14.749,14.749,0,0,0,838,2747.011Zm9.821,8.957,1.641,1.5-3.972,3.969-1.6-1.817Z" transform="translate(-793.006 -2704.004)" fill="#15263e"/>
</svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
<path id="Forma_1" data-name="Forma 1" d="M556.724,2363.744l-4.664-4.664a1.106,1.106,0,0,0-1.566,0l-1.824,1.824a25.056,25.056,0,0,0-23.084-2.866l7.174-7.173a3.61,3.61,0,1,0-1.566-1.568l-11.332,11.332-1.549-1.548a1.107,1.107,0,0,0-1.566,0l-4.664,4.664a1.107,1.107,0,0,0,0,1.567l1.549,1.549L502.3,2378.19a3.609,3.609,0,1,0,1.566,1.567l7.174-7.175a25.058,25.058,0,0,0,2.866,23.085l-1.824,1.823a1.109,1.109,0,0,0,0,1.568l4.664,4.663a1.107,1.107,0,0,0,1.566,0l4.664-4.663a1.109,1.109,0,0,0,0-1.568l-4.664-4.664a1.106,1.106,0,0,0-1.566,0l-1.244,1.244a22.811,22.811,0,0,1,0-25.34l1.244,1.244a1.109,1.109,0,0,0,1.566,0l4.664-4.665a1.108,1.108,0,0,0,0-1.567l-1.244-1.244a22.814,22.814,0,0,1,25.341,0l-1.244,1.244a1.107,1.107,0,0,0,0,1.566l4.664,4.665a1.109,1.109,0,0,0,1.566,0l4.664-4.665A1.107,1.107,0,0,0,556.724,2363.744Zm-39.194,31.434,3.1,3.1-3.1,3.1-3.1-3.1Zm15.889-48.508a1.392,1.392,0,1,1,0,1.97h0A1.394,1.394,0,0,1,533.419,2346.669Zm-31.778,35.716a1.391,1.391,0,1,1,0-1.97h0A1.4,1.4,0,0,1,501.641,2382.386Zm15.889-14.76-1.549-1.548h0l-1.549-1.55,3.1-3.1,1.546,1.547,0,0,0,0,.142.141.009.008,1.4,1.4Zm33.747,0-3.1-3.1,3.1-3.1,3.1,3.1Z" transform="translate(-497.049 -2344.047)" fill="#15263e"/>
</svg>`
];
const skills = [
  {title:"Best Service",
  svg:svgs[3]
},
  {title:"Pixel Perfect",
  svg:svgs[1]
},
  {title:"Unique Ideas",
  svg:svgs[2]
},
  {title:"Helpful Support",
  svg:svgs[3]
},
  {title:"HTML",
  svg:svgs[4]
},
  {title:"CSS",
  svg:svgs[5]
},
  {title:"Javascript",
  svg:svgs[6]
},
  {title:"React",
  svg:svgs[7]
},
];
skills.map((skill) => {
  servicesEl.innerHTML += `
  <div class="service-wrapper">
  <div class="service">
    ${skill.svg}
    
    <h3>${skill.title}</h3>            
  </div>
  <div class="service-description">
    <h3>${skill.title}</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam necessitatibus maiores cum aspernatur, deleniti dolore ipsa aut vitae et, magni, officiis consequatur? Architecto soluta quia ratione quas adipisci itaque.</p>
  </div>
</div>
  `;
});

// lastest projects code

const recommswiper = new Swiper(".recc-swiper", {
  direction: "horizontal",

  autoplay: {
    delay: 50000,
  },
  pagination: {
    el: ".swiper-paginationa",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '" style="background-color: transparent; border: 1px solid white;">' +
        (index + 1) +
        "</span>"
      );
    },
  },

  currentClass: "swiper-pagination-current",
  allowTouchMove: false,
});

// more info about me section code

function handleScroll() {
  const jsBar = document.getElementById("js-bar");
  const htmlBar = document.getElementById("html-bar");
  const cssBar = document.getElementById("css-bar");
  const reactBar = document.getElementById("react-bar");
  const positionFromTopHtml = htmlBar.getBoundingClientRect().top;

  const jsSpan = document.getElementById("js-bar-span");
  const htmlSpan = document.getElementById("html-bar-span");
  const cssSpan = document.getElementById("css-bar-span");
  const reactSpan = document.getElementById("react-bar-span");
  const windowHeight = window.innerHeight;

  let scrolledPercentageHtml =
    ((windowHeight - positionFromTopHtml) / windowHeight) * 100;
  scrolledPercentageHtml = Math.min(Math.max(scrolledPercentageHtml, 0), 100);

  if (positionFromTopHtml < windowHeight) {
    htmlSpan.textContent = `(0%)`;
    cssSpan.textContent = `(0%)`;
    jsSpan.textContent = `(0%)`;
    reactSpan.textContent = `(0%)`;
    let currentValue = 0;
    const incrementInterval = setInterval(() => {
      if (currentValue >= 100) {
        clearInterval(incrementInterval);
      } else {
        currentValue += 1;
        htmlBar.value = currentValue;
        htmlSpan.textContent = `(${currentValue}%)`;
        cssBar.value = currentValue;
        cssSpan.textContent = `(${currentValue}%)`;
        jsBar.value = currentValue;
        jsSpan.textContent = `(${currentValue}%)`;
        reactBar.value = currentValue;
        reactSpan.textContent = `(${currentValue}%)`;
      }
    }, 10);

    window.removeEventListener("scroll", handleScroll);
  } else {
    htmlSpan.textContent = `(${scrolledPercentageHtml.toFixed()}%)`;
    htmlBar.value = scrolledPercentageHtml;
  }
}

window.addEventListener("scroll", handleScroll);

// latest projects

let projects = [
  { time: 2, name: "3D Mockup Design", id: "prd3" },
  { time: 5, name: "Markup", id: "prmarkup" },
  { time: 7, name: "Chat-box", id: "prchat-box" },
  { time: 4, name: "movies", id: "prmovies" },
  { time: 1, name: "music", id: "prmusic" },
  { time: 8, name: "social", id: "prsocial" },
];
const projectsEl = document.getElementById("projects");

projects.map((project) => {
  projectsEl.innerHTML += `
  <div class="project" >
  <div class="project-inner-wrapper" id=${project.id}>
  <div class="project-svg-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
    >
      <path
        id="Forma_1_copy_10"
        data-name="Forma 1 copy 10"
        d="M1105,4100l-.98-.913c-3.64-3-6.02-5.021-6.02-7.5a3.673,3.673,0,0,1,3.85-3.588,4.306,4.306,0,0,0,6.3,0,3.673,3.673,0,0,1,3.85,3.588c0,2.478-2.38,4.5-6.02,7.5Z"
        transform="translate(-1098 -4087.997)"
        fill="#e93656"
      />
    </svg>
  </div>
  <p>${project.time} months ago</p>
  <h2>${project.name}</h2>
  </div>
</div>
  `;
});

let allProjectesClicked = false;
const allProjectNav = document.getElementById("all");

allProjectNav.addEventListener("click", function () {
  const allProjectsEl = document.querySelectorAll(".project-inner-wrapper");
  allProjectesClicked = !allProjectesClicked;
  if (allProjectesClicked) {
    allProjectsEl.forEach((project) => (project.style.opacity = "1"));
    allProjectsEl.forEach(
      (project) => (project.style.backgroundColor = "black")
    );
    allProjectsEl.forEach(
      (project) => (project.style.border = "1px solid gray")
    );
    projects.forEach(
      (project) =>
        (document.getElementById(project.id.slice(2)).style.color = "white")
    );
  } else {
    allProjectsEl.forEach((project) => (project.style.opacity = "0"));

    projects.forEach(
      (project) =>
        (document.getElementById(project.id.slice(2)).style.color = "white")
    );
  }
});

document.addEventListener("click", function (e) {
  let asd = projects.find((project) => `pr${e.target.id}` == project.id);
  let foundId = asd?.id;

  if (foundId) {
    projects.forEach(
      (project) => (document.getElementById(project.id).style.opacity = "0")
    );
    projects.forEach(
      (project) =>
        (document.getElementById(project.id.slice(2)).style.color = "white")
    );
    document.getElementById(foundId).style.opacity = "1";
    document.getElementById(foundId).style.backgroundColor = "black";
    document.getElementById(foundId)?.setAttribute("data", "clickced");
    document.getElementById(e.target.id).style.color = "#E93656";
  } else {
    document.getElementById(foundId)?.setAttribute("data", "unclicked");
  }
});

document.addEventListener("mouseover", function (e) {
  let asd = projects.find((project) => `${e.target.id}` == project.id);
  // console.log(asd.id)
  let foundId = asd?.id;

  if (foundId) {
    projects.forEach(
      (project) => (document.getElementById(project.id).style.opacity = "0")
    );
    projects.forEach(
      (project) =>
        (document.getElementById(project.id.slice(2)).style.color = "white")
    );
    document.getElementById(foundId).style.opacity = "1";
    document.getElementById(foundId).style.backgroundColor = "black";
    document.getElementById(foundId)?.setAttribute("data", "clickced");
    document.getElementById(e.target.id).style.color = "#E93656";
  } else {
    document.getElementById(foundId)?.setAttribute("data", "unclicked");
  }
  document
    .querySelectorAll("li")
    .forEach((item) =>
      item.id == e.target.id
        ? item.classList.add("red")
        : item.classList.add("white")
    );
});

// form code

const inputField = document.getElementById("form");
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const fbMessage = document.getElementById("fb-message");
inputField.addEventListener("submit", function (e) {
  e.preventDefault();
  const formValues = document.forms.form;

  try {
    if (formValues.name.value.length > 2) {
      formValues.name.style.border = "5px solid green";
    } else {
      formValues.name.style.border = "3px solid red";
      throw new Error("name should be longer");
    }
    if (formValues.page.value.length > 1) {
      formValues.page.style.border = "5px solid green";
    } else {
      formValues.page.style.border = "3px solid red";
      throw new Error("webpage name should be longer");
    }
    if (formValues.message.value.length > 8) {
      formValues.message.style.border = "5px solid green";
    } else {
      formValues.message.style.border = "3px solid red";
      throw new Error("Message should be longer");
    }
    if (validateEmail(formValues.email.value)) {
      formValues.email.style.border = "5px solid green";
      console.log(formValues.email.value);
    } else {
      formValues.email.style.border = "3px solid red";
      throw new Error("invalid email");
    }
    const userData = {
      userName: formValues.name.value,

      userEmail: formValues.email.value,

      userPage: formValues.page.value,
      userMessage: formValues.message.value,
    };

    const posta = {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://jsonplaceholder.typicode.com/posts", posta)
      .then((res) => {
        if (!res.ok) {
          throw new Error("some error ");
        }
        return res.json();
      })
      .then((data) => {
        fbMessage.style.display = " block";
        setTimeout(() => {
          fbMessage.style.display = "none";
        }, 3000);
        formValues.name.value = "";
        formValues.email.value = "";
        formValues.page.value = "";
        formValues.message.value = "";
        formValues.name.style.border = "3px solid transparent";
        formValues.page.style.border = "3px solid transparent";
        formValues.message.style.border = "3px solid transparent";
        formValues.email.style.border = "3px solid transparent";
      })
      .catch((err) => console.log(err));
  } catch (err) {}
});
