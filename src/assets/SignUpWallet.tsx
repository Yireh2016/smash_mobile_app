import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number) => `

<svg
width="${375 * factor}" height="${371 * factor}"
  viewBox="0 0 375 371"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M145.504 43.0122C145.504 44.7863 144.978 46.5207 143.992 47.9958C143.006 49.471 141.605 50.6208 139.966 51.2997C138.327 51.9787 136.523 52.1563 134.783 51.8102C133.043 51.4641 131.445 50.6097 130.19 49.3552C128.936 48.1006 128.081 46.5023 127.735 44.7622C127.389 43.0221 127.567 41.2185 128.246 39.5793C128.925 37.9402 130.075 36.5392 131.55 35.5536C133.025 34.5679 134.759 34.0418 136.533 34.0418C138.912 34.0448 141.191 34.9909 142.873 36.6725C144.555 38.3541 145.501 40.634 145.504 43.0122ZM129.403 43.0122C129.403 44.4224 129.821 45.801 130.605 46.9735C131.388 48.1461 132.502 49.06 133.805 49.5997C135.108 50.1394 136.541 50.2806 137.924 50.0055C139.308 49.7303 140.578 49.0512 141.575 48.054C142.572 47.0569 143.252 45.7864 143.527 44.4032C143.802 43.0201 143.661 41.5864 143.121 40.2835C142.581 38.9806 141.667 37.867 140.495 37.0835C139.322 36.3 137.944 35.8819 136.533 35.8819C134.642 35.8819 132.829 36.6331 131.492 37.9703C130.154 39.3075 129.403 41.1211 129.403 43.0122Z"
    fill="#29B782"
  />
  <path
    d="M77.4203 120.065C77.4203 121.84 76.8942 123.574 75.9085 125.049C74.9228 126.524 73.5219 127.674 71.8827 128.353C70.2436 129.032 68.4399 129.21 66.6999 128.864C64.9598 128.517 63.3614 127.663 62.1069 126.409C60.8523 125.154 59.998 123.556 59.6519 121.816C59.3057 120.075 59.4834 118.272 60.1623 116.633C60.8413 114.994 61.991 113.593 63.4662 112.607C64.9414 111.621 66.6757 111.095 68.4499 111.095C70.8281 111.098 73.1079 112.044 74.7896 113.726C76.4712 115.407 77.4172 117.687 77.4203 120.065ZM61.3196 120.065C61.3196 121.476 61.7378 122.854 62.5213 124.027C63.3047 125.199 64.4183 126.113 65.7212 126.653C67.0241 127.193 68.4578 127.334 69.841 127.059C71.2241 126.784 72.4946 126.105 73.4918 125.107C74.489 124.11 75.1681 122.84 75.4432 121.457C75.7183 120.073 75.5771 118.64 75.0374 117.337C74.4978 116.034 73.5839 114.92 72.4113 114.137C71.2387 113.353 69.8601 112.935 68.4499 112.935C66.5588 112.935 64.7452 113.686 63.408 115.024C62.0708 116.361 61.3196 118.174 61.3196 120.065Z"
    fill="#29B782"
  />
  <path
    d="M244.408 206.549C244.408 208.324 243.882 210.058 242.896 211.533C241.911 213.008 240.51 214.158 238.871 214.837C237.231 215.516 235.428 215.694 233.688 215.348C231.948 215.001 230.349 214.147 229.095 212.893C227.84 211.638 226.986 210.04 226.64 208.3C226.294 206.559 226.471 204.756 227.15 203.117C227.829 201.478 228.979 200.077 230.454 199.091C231.929 198.105 233.664 197.579 235.438 197.579C237.816 197.582 240.096 198.528 241.777 200.21C243.459 201.891 244.405 204.171 244.408 206.549ZM228.307 206.549C228.307 207.96 228.726 209.338 229.509 210.511C230.293 211.683 231.406 212.597 232.709 213.137C234.012 213.677 235.446 213.818 236.829 213.543C238.212 213.268 239.482 212.589 240.48 211.591C241.477 210.594 242.156 209.324 242.431 207.941C242.706 206.557 242.565 205.124 242.025 203.821C241.486 202.518 240.572 201.404 239.399 200.621C238.227 199.837 236.848 199.419 235.438 199.419C233.547 199.419 231.733 200.17 230.396 201.508C229.059 202.845 228.307 204.658 228.307 206.549Z"
    fill="#29B782"
  />
  <path
    d="M352.053 8.97039C352.053 10.7446 351.527 12.4789 350.541 13.9541C349.555 15.4293 348.154 16.579 346.515 17.258C344.876 17.9369 343.072 18.1146 341.332 17.7684C339.592 17.4223 337.994 16.568 336.739 15.3134C335.485 14.0589 334.63 12.4605 334.284 10.7204C333.938 8.98034 334.116 7.17669 334.795 5.53756C335.474 3.89843 336.623 2.49744 338.099 1.51176C339.574 0.526075 341.308 -1.71661e-05 343.082 -1.71661e-05C345.46 0.00302505 347.74 0.949108 349.422 2.63073C351.104 4.31235 352.05 6.59222 352.053 8.97039ZM335.952 8.97039C335.952 10.3806 336.37 11.7592 337.154 12.9318C337.937 14.1044 339.051 15.0183 340.354 15.5579C341.657 16.0976 343.09 16.2388 344.473 15.9637C345.857 15.6886 347.127 15.0095 348.124 14.0123C349.121 13.0151 349.8 11.7446 350.076 10.3615C350.351 8.97831 350.21 7.54464 349.67 6.24174C349.13 4.93884 348.216 3.82524 347.044 3.04175C345.871 2.25826 344.493 1.84007 343.082 1.84007C341.191 1.84007 339.378 2.5913 338.04 3.92849C336.703 5.26569 335.952 7.07931 335.952 8.97039Z"
    fill="#29B782"
  />
  <path
    d="M11.1774 160.088C11.1774 156.721 8.44842 153.992 5.08209 153.992C1.71577 153.992 -1.01318 156.721 -1.01318 160.088C-1.01318 163.454 1.71577 166.183 5.08209 166.183C8.44842 166.183 11.1774 163.454 11.1774 160.088Z"
    fill="white"
  />
  <path
    d="M96.8565 226.446C96.8565 224.286 95.1059 222.535 92.9463 222.535C90.7868 222.535 89.0361 224.286 89.0361 226.446C89.0361 228.605 90.7868 230.356 92.9463 230.356C95.1059 230.356 96.8565 228.605 96.8565 226.446Z"
    fill="white"
  />
  <path
    d="M190.126 7.13034C190.126 3.38291 187.088 0.345026 183.34 0.345026C179.593 0.345026 176.555 3.38291 176.555 7.13034C176.555 10.8778 179.593 13.9156 183.34 13.9156C187.088 13.9156 190.126 10.8778 190.126 7.13034Z"
    fill="white"
  />
  <path
    d="M313.641 157.557C313.641 153.81 310.603 150.772 306.856 150.772C303.109 150.772 300.071 153.81 300.071 157.557C300.071 161.305 303.109 164.343 306.856 164.343C310.603 164.343 313.641 161.305 313.641 157.557Z"
    fill="white"
  />
  <path
    d="M254.528 64.2882C254.528 62.3827 252.984 60.838 251.078 60.838C249.173 60.838 247.628 62.3827 247.628 64.2882C247.628 66.1936 249.173 67.7383 251.078 67.7383C252.984 67.7383 254.528 66.1936 254.528 64.2882Z"
    fill="white"
  />
  <path
    d="M317.36 266.381C317.36 270.668 313.861 274.167 309.575 274.167H265.838C261.552 274.167 258.053 270.668 258.053 266.381V254.835C258.053 250.549 261.552 247.05 265.838 247.05H309.575C313.861 247.05 317.36 250.549 317.36 254.835V266.381Z"
    fill="#2FA679"
  />
  <path
    d="M141.975 193.428H138.563C136.289 193.428 134.452 195.265 134.452 197.539C134.452 199.814 136.289 201.651 138.563 201.651H139.526L141.975 193.428Z"
    fill="#2FA679"
  />
  <path
    d="M218.952 143.131C217.115 146.28 214.141 148.379 210.904 149.341C208.542 150.041 205.918 150.129 203.469 149.429C202.332 149.079 201.195 148.642 200.057 148.029L199.708 148.642L203.206 149.691L208.892 151.353L215.365 153.278L257.003 165.612L230.236 149.866L218.952 143.131Z"
    fill="#29B782"
  />
  <path
    d="M232.335 127.998L259.102 154.765L275.197 164.3L231.898 121L220.789 132.109L225.425 134.908L232.335 127.998Z"
    fill="#29B782"
  />
  <path
    d="M303.277 199.027L300.652 201.651C302.489 201.913 304.151 202.788 305.376 204.1L310.187 199.289L294.617 183.719L292.167 187.917L303.277 199.027Z"
    fill="#29B782"
  />
  <path
    d="M225.425 134.908L259.102 154.765L232.335 127.998L225.425 134.908Z"
    fill="#43D59E"
  />
  <path
    d="M292.167 187.917L284.12 201.651H288.056H288.318H289.193H291.642H296.366H296.978H299.69C300.04 201.651 300.39 201.651 300.74 201.738L303.364 199.114L292.167 187.917Z"
    fill="#43D59E"
  />
  <path
    d="M204.956 128.173L217.377 135.521L222.013 138.232L238.983 148.292L252.366 156.252L272.398 168.061L288.581 177.683L291.38 179.345L290.942 180.045L288.493 184.244L281.495 196.053L278.171 201.563H280.708H280.883H282.02H284.119L292.167 187.917L294.616 183.719L298.115 177.771L275.197 164.3L259.102 154.765L225.425 134.908L220.788 132.109L202.856 121.525L188.686 145.493L193.847 146.98L204.956 128.173Z"
    fill="#29B782"
  />
  <path
    d="M288.493 184.244L290.943 180.045L291.38 179.345L288.581 177.683L272.311 168.061L252.279 156.252L238.896 148.379L221.926 138.32L217.29 135.608L204.956 128.173L193.847 146.98L199.707 148.729L200.057 148.117C201.107 148.729 202.244 149.167 203.469 149.516C205.918 150.129 208.542 150.129 210.904 149.429C214.141 148.467 217.115 146.367 218.952 143.218L230.236 149.866L257.003 165.699L263.826 167.711L264.963 168.061L264.788 168.673L264.351 170.073L268.724 172.697L271.348 174.272C271.174 174.534 271.086 174.709 270.999 174.971C267.675 181.444 269.949 189.404 276.247 193.166L271.261 201.651H274.76H275.022H278.259L281.495 196.14L288.493 184.244Z"
    fill="#43D59E"
  />
  <path
    d="M270.998 174.884C271.086 174.621 271.261 174.447 271.348 174.184L268.724 172.61L264.35 169.985L254.991 201.563H257.877H258.402H264.001H268.024H271.173L276.159 193.078C269.949 189.405 267.762 181.357 270.998 174.884Z"
    fill="#29B782"
  />
  <path
    d="M142.15 193.428H141.975L139.613 201.563H139.788H142.499H142.587H144.949L162.531 142.519L186.236 149.604L191.397 151.091L197.258 152.84L199.445 153.54L205.043 155.202L211.604 157.127L258.752 171.122L249.742 201.563H250.53H251.929H252.629H252.979H254.991L264.35 170.073L264.788 168.673L264.963 168.061L263.826 167.711L257.003 165.699L215.365 153.365L208.805 151.441L203.206 149.779L199.707 148.729L193.847 146.98L188.686 145.493L158.857 136.57L143.549 188.092H143.724L142.15 193.428Z"
    fill="#29B782"
  />
  <path
    d="M211.604 157.127L205.131 155.202L199.445 153.54L197.258 152.928L191.397 151.179L186.236 149.691L162.531 142.606L144.949 201.563H146.961H147.311H147.748H148.185H151.159L162.618 162.987C169.879 165.087 177.576 160.888 179.676 153.628L183.175 154.677L188.336 156.165L194.196 157.914L194.721 158.089L200.32 159.751L206.793 161.675L238.021 170.948C235.921 178.295 240.033 185.906 247.381 188.092L243.444 201.476H245.019H246.331H247.293H249.655L258.665 171.035L211.604 157.127Z"
    fill="#43D59E"
  />
  <path
    d="M238.109 171.035L206.88 161.763L200.407 159.838L194.809 158.176L194.284 158.001L188.423 156.252L183.262 154.765L179.764 153.715C177.577 160.976 169.966 165.174 162.706 163.075L151.247 201.651H152.472H153.084H154.046H154.746H155.358H156.146H158.245H159.207H164.106H165.155H165.418H166.468H173.29H173.553H175.04H175.302H221.489H225.775H243.532L247.468 188.267C240.208 186.081 236.009 178.383 238.109 171.035Z"
    fill="#29B782"
  />
  <path
    d="M300.652 201.651C300.302 201.563 299.953 201.563 299.603 201.563H296.891H296.279H291.555H289.106H288.231H288.056H284.12H282.108H280.971H280.796H278.259H275.023H274.76H271.261H268.112H264.088H258.49H257.965H255.079H253.067H252.717H252.017H250.617H249.83H247.468H246.506H245.194H243.619H225.862H221.576H175.39H175.128H173.64H173.378H166.555H165.505H165.243H164.193H159.295H158.333H156.233H155.446H154.834H154.134H153.172H152.559H151.335H148.361H147.923H147.486H147.136H145.124H142.762H142.587H139.876H139.701H138.738C136.464 201.563 134.627 199.726 134.627 197.452C134.627 195.178 136.464 193.341 138.738 193.341H141.975H142.062L143.637 188.092H143.55H142.85H133.752C129.466 188.092 125.967 191.591 125.967 195.878V205.237V209.961H288.406C293.742 209.961 298.028 214.247 298.028 219.583V308.456C298.028 313.792 293.742 318.078 288.406 318.078H242.22L237.934 326.388H299.603C303.889 326.388 307.388 322.889 307.388 318.603V309.244V217.484V209.349C307.388 207.337 306.601 205.5 305.288 204.1C304.151 202.788 302.489 201.913 300.652 201.651Z"
    fill="#29B782"
  />
  <path
    d="M125.879 252.473L126.054 252.648V252.386C125.967 252.386 125.879 252.473 125.879 252.473Z"
    fill="#608679"
  />
  <path
    opacity="0.2"
    d="M125.879 252.473L126.054 252.648V252.386C125.967 252.386 125.879 252.473 125.879 252.473Z"
    fill="#5D5D5D"
  />
  <path
    d="M125.879 257.984L125.967 257.809V257.634L125.879 257.984Z"
    fill="#29B782"
  />
  <path
    opacity="0.2"
    d="M125.879 257.984L125.967 257.809V257.634L125.879 257.984Z"
    fill="#5D5D5D"
  />
  <path
    d="M125.617 277.666L125.967 277.928V276.353L125.617 277.666Z"
    fill="#43D59E"
  />
  <path
    opacity="0.2"
    d="M125.617 277.666L125.967 277.928V276.353L125.617 277.666Z"
    fill="#5D5D5D"
  />
  <path
    d="M125.967 318.078V318.603C125.967 320.003 126.317 321.315 127.017 322.54C128.329 324.814 130.866 326.388 133.752 326.388H140.051H161.394H171.716H177.402H178.626H184.137H187.024H191.923H215.453H218.427H221.751H224.9H230.586H237.846L242.132 318.078H125.967Z"
    fill="#29B782"
  />
  <path
    opacity="0.2"
    d="M125.967 318.078V318.603C125.967 320.003 126.317 321.315 127.017 322.54C128.329 324.814 130.866 326.388 133.752 326.388H140.051H161.394H171.716H177.402H178.626H184.137H187.024H191.923H215.453H218.427H221.751H224.9H230.586H237.846L242.132 318.078H125.967Z"
    fill="#5D5D5D"
  />
  <path
    d="M242.307 318.078H288.494C293.829 318.078 298.116 313.792 298.116 308.456V219.583C298.116 214.247 293.829 209.961 288.494 209.961H125.967V215.384V222.382L255.079 293.411L242.307 318.078Z"
    fill="#29B782"
  />
  <path
    opacity="0.3"
    d="M242.307 318.078H288.494C293.829 318.078 298.116 313.792 298.116 308.456V219.583C298.116 214.247 293.829 209.961 288.494 209.961H125.967V215.384V222.382L255.079 293.411L242.307 318.078Z"
    fill="#1C7B58"
  />
  <path
    d="M255.079 293.411L125.967 222.382V222.907V247.4V252.386V252.648V257.634V257.809V261.308V268.306V276.353V277.928V283.701V309.244V318.078H242.307L255.079 293.411Z"
    fill="#29B782"
  />
  <path
    opacity="0.2"
    d="M255.079 293.411L125.967 222.382V222.907V247.4V252.386V252.648V257.634V257.809V261.308V268.306V276.353V277.928V283.701V309.244V318.078H242.307L255.079 293.411Z"
    fill="#5D5D5D"
  />
  <path
    opacity="0.3"
    d="M255.079 293.411L125.967 222.382V222.907V247.4V252.386V252.648V257.634V257.809V261.308V268.306V276.353V277.928V283.701V309.244V318.078H242.307L255.079 293.411Z"
    fill="#29B782"
  />
  <path
    d="M317.36 271.367C317.36 275.654 313.861 279.152 309.575 279.152H265.838C261.552 279.152 258.053 275.654 258.053 271.367V259.821C258.053 255.535 261.552 252.036 265.838 252.036H309.575C313.861 252.036 317.36 255.535 317.36 259.821V271.367Z"
    fill="#43D59E"
  />
  <path
    d="M306.688 251.948C306.688 251.948 311.149 252.123 311.149 249.149C311.149 248.187 310.362 247.05 308.962 247.05C308.962 247.05 317.447 246.087 317.447 255.622C317.447 265.157 317.447 266.381 317.447 266.381L306.688 251.948Z"
    fill="#43D59E"
  />
  <path
    d="M279.221 265.769C279.221 269.968 275.809 273.379 271.611 273.379C267.412 273.379 264 269.968 264 265.769C264 261.57 267.412 258.159 271.611 258.159C275.809 258.159 279.221 261.57 279.221 265.769Z"
    fill="white"
  />
  <path
    d="M207.58 371L58 288.687L102.874 202.176L252.454 284.488L207.58 371Z"
    fill="#29B782"
  />
  <path
    d="M206.093 365.139L63.5981 286.588L104.448 208.124L246.856 286.675L206.093 365.139Z"
    fill="#43D59E"
  />
  <path
    d="M209.679 347.207L234.435 299.621C228.661 296.472 226.474 289.037 229.449 283.089L117.132 221.07C113.983 227.018 106.81 229.292 101.037 226.143C100.95 226.056 100.862 226.056 100.775 225.968L76.0195 273.642C76.107 273.729 76.1945 273.729 76.282 273.817C82.0552 276.966 84.2421 284.401 81.268 290.349L193.584 352.281C196.733 346.332 203.906 344.058 209.679 347.207Z"
    fill="#29B782"
  />
  <path
    d="M183.962 302.421C175.477 318.778 155.796 324.901 139.963 316.154C124.13 307.407 118.095 287.113 126.58 270.843C135.065 254.572 154.746 248.362 170.579 257.109C186.412 265.769 192.447 286.063 183.962 302.421Z"
    fill="#43D59E"
  />
  <path
    d="M138.476 304.957L141.362 300.059C135.851 295.248 136.464 289.649 139.088 285.188L147.223 289.999C146.086 292.011 145.998 293.761 149.147 295.685C151.684 297.172 153.171 296.647 154.396 294.635C155.533 292.623 154.571 291.224 150.897 287.725C147.223 284.139 143.112 279.765 147.573 272.33C150.547 267.256 155.096 265.594 160.607 267.519L163.493 262.62L170.579 266.819L167.692 271.717C171.803 275.304 172.59 279.852 169.441 286.15L161.306 281.339C162.443 278.803 162.006 277.316 159.907 276.091C157.895 274.866 156.583 275.216 155.708 276.703C154.571 278.628 155.271 280.027 157.895 282.477C161.744 286.15 167.429 291.311 162.618 299.359C159.644 304.432 155.183 306.969 148.448 304.345L145.561 309.243L138.476 304.957Z"
    fill="#29B782"
  />
  <path
    opacity="0.3"
    d="M125.967 200.776C125.967 200.776 126.142 209.961 134.977 209.961H125.967V200.776Z"
    fill="#A156DF"
  />
</svg>




`;

export default ({ factor = 1 }) => <SvgXml xml={xml(factor)} />;