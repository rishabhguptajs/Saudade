import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer">
        <div className="footer_content">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Values</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="footer_content">
          <h2>Support</h2>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer_content">
          <h2>Community</h2>
          <ul>z
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 64 64"
              >
                <radialGradient
                  id="xW1rhakWxHfCsuNDi~7SWa_119014_gr1"
                  cx="32"
                  cy="33"
                  r="29.606"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#c5f1ff"></stop>
                  <stop offset=".35" stopColor="#cdf3ff"></stop>
                  <stop offset=".907" stopColor="#e4faff"></stop>
                  <stop offset="1" stopColor="#e9fbff"></stop>
                </radialGradient>
                <path
                  fill="url(#xW1rhakWxHfCsuNDi~7SWa_119014_gr1)"
                  d="M10.5,60h41c2.485,0,4.5-2.015,4.5-4.5v0c0-2.485-2.015-4.5-4.5-4.5h-0.393 c-0.996,0-1.92-0.681-2.08-1.664C48.824,48.083,49.785,47,51,47l5.288,0c2.347,0,4.453-1.704,4.689-4.039 C61.247,40.282,59.127,38,56.5,38l-3.393,0c-0.996,0-1.92-0.681-2.08-1.664C50.824,35.083,51.785,34,53,34l5.241,0 c2.868,0,5.442-2.082,5.731-4.936C64.303,25.789,61.711,23,58.5,23l-12.33,0c-1.624,0-3.081-1.216-3.166-2.839 C42.914,18.431,44.29,17,46,17l2.241,0c2.868,0,5.442-2.082,5.731-4.936C54.303,8.789,51.711,6,48.5,6l-38,0C7.462,6,5,8.462,5,11.5 v0c0,3.038,2.462,5.5,5.5,5.5H14c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2l-9.288,0c-2.347,0-4.453,1.704-4.689,4.038 C-0.248,27.718,1.873,30,4.5,30l8.33,0c1.624,0,3.081,1.216,3.166,2.839C16.086,34.569,14.71,36,13,36H7.712 c-2.347,0-4.453,1.704-4.689,4.038C2.753,42.718,4.873,45,7.5,45h6.393c0.996,0,1.92,0.681,2.08,1.664 C16.176,47.917,15.215,49,14,49l-3.5,0C7.462,49,5,51.462,5,54.5v0C5,57.538,7.462,60,10.5,60z"
                ></path>
                <linearGradient
                  id="xW1rhakWxHfCsuNDi~7SWb_119014_gr2"
                  x1="32.5"
                  x2="32.5"
                  y1="64.102"
                  y2="22.102"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#155cde"></stop>
                  <stop offset=".278" stopColor="#1f7fe5"></stop>
                  <stop offset=".569" stopColor="#279ceb"></stop>
                  <stop offset=".82" stopColor="#2cafef"></stop>
                  <stop offset="1" stopColor="#2eb5f0"></stop>
                </linearGradient>
                <path
                  fill="url(#xW1rhakWxHfCsuNDi~7SWb_119014_gr2)"
                  d="M57.667,19.058c-1.44,0.493-2.997,0.771-4.636,0.956c1.617-0.805,2.735-1.99,3.78-3.441 c0.598-0.83-0.329-1.915-1.25-1.469c-1.638,0.793-3.22,1.382-5.213,1.721C48.399,15.073,45.829,14,43,14 c-4.11,0-7.69,2.25-9.57,5.58C32.52,21.18,32,23.03,32,25c0,0.677,0.082,1.332,0.199,1.975c-8.839-0.263-16.248-4.827-20.463-10.568 C11.268,15.77,10.29,15.906,10,16.641C9.553,17.772,9,19,9,21c0,0.12,0,0.23,0.01,0.34c0.04,1.3,0.33,2.54,0.83,3.66 c0.94,2.17,2.64,3.94,4.77,4.98C14.41,29.99,14.21,30,14,30c-2,0-2.658-0.685-3.743-0.967c-0.683-0.178-1.35,0.392-1.247,1.09 c0.328,2.221,1.484,4.559,3.029,6.047c1.66,1.62,3.88,2.66,6.35,2.81C17.07,39.63,15.58,40,14,40h-1c-0.756,0-1.227,0.8-0.886,1.474 c1.677,3.317,5.561,5.53,9.722,5.516C17.826,49.518,13.091,51,8,51H7c-0.552,0-1,0.448-1,1c0,0.458,0.314,0.828,0.734,0.946 l-0.002,0.017c0,0,7.53,3.037,16.268,3.037c16.93,0,30.69-13.57,30.99-30.43C54,25.38,54,25.19,54,25s0-0.38-0.01-0.57 c-0.014-0.275-0.048-0.545-0.082-0.815c1.851-0.589,3.499-1.558,4.811-2.926C59.442,19.936,58.655,18.72,57.667,19.058z"
                ></path>
              </svg>
              &nbsp; Twitter
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 64 64"
              >
                <radialGradient
                  id="nT5WH7nXAOiS46rXmee3Oa_msQ6HdxpqUmi_gr1"
                  cx="33.34"
                  cy="27.936"
                  r="43.888"
                  gradientTransform="matrix(1 0 0 -1 0 66)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#f4e9c3"></stop>
                  <stop offset=".219" stopColor="#f8eecd"></stop>
                  <stop offset=".644" stopColor="#fdf4dc"></stop>
                  <stop offset="1" stopColor="#fff6e1"></stop>
                </radialGradient>
                <path
                  fill="url(#nT5WH7nXAOiS46rXmee3Oa_msQ6HdxpqUmi_gr1)"
                  d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z"
                ></path>
                <linearGradient
                  id="nT5WH7nXAOiS46rXmee3Ob_msQ6HdxpqUmi_gr2"
                  x1="32"
                  x2="32"
                  y1="-3.34"
                  y2="59.223"
                  gradientTransform="matrix(1 0 0 -1 0 66)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#155cde"></stop>
                  <stop offset=".278" stopColor="#1f7fe5"></stop>
                  <stop offset=".569" stopColor="#279ceb"></stop>
                  <stop offset=".82" stopColor="#2cafef"></stop>
                  <stop offset="1" stopColor="#2eb5f0"></stop>
                </linearGradient>
                <path
                  fill="url(#nT5WH7nXAOiS46rXmee3Ob_msQ6HdxpqUmi_gr2)"
                  d="M58,32c0,13.35-10.05,24.34-23,25.83C34.02,57.94,33.01,58,32,58c-1.71,0-3.38-0.17-5-0.49	C15.03,55.19,6,44.65,6,32C6,17.64,17.64,6,32,6S58,17.64,58,32z"
                ></path>
                <path
                  fill="#fff"
                  d="M42.8,36.05l-0.76,2C41.6,39.22,40.46,40,39.19,40H35v17.83C34.02,57.94,33.01,58,32,58	c-1.71,0-3.38-0.17-5-0.49V40h-2.95C22.36,40,21,38.66,21,37v-2c0-1.66,1.36-3,3.05-3H27v-6c0-5.51,4.49-10,10-10h3	c2.21,0,4,1.79,4,4s-1.79,4-4,4h-3c-1.1,0-2,0.9-2,2v6h4.95C42.08,32,43.55,34.09,42.8,36.05z"
                ></path>
              </svg>
              &nbsp; Facebook
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 100 100"
              >
                <circle cx="13" cy="29" r="2" fill="#ee3e54"></circle>
                <circle cx="77" cy="13" r="1" fill="#f1bc19"></circle>
                <circle cx="50" cy="50" r="37" fill="#fce0a2"></circle>
                <circle cx="83" cy="15" r="4" fill="#f1bc19"></circle>
                <circle cx="87" cy="24" r="2" fill="#ee3e54"></circle>
                <circle cx="81" cy="76" r="2" fill="#fbcd59"></circle>
                <circle cx="15" cy="63" r="4" fill="#fbcd59"></circle>
                <circle cx="25" cy="87" r="2" fill="#ee3e54"></circle>
                <circle cx="18.5" cy="53.5" r="2.5" fill="#fff"></circle>
                <circle cx="21" cy="67" r="1" fill="#f1bc19"></circle>
                <circle cx="80" cy="34" r="1" fill="#fff"></circle>
                <path
                  fill="#3231c7"
                  d="M72.3,33.7v32.6c0,3.31-2.69,6-6,6H33.7c-3.31,0-6-2.69-6-6V33.7c0-3.31,2.69-6,6-6h32.6 C69.61,27.7,72.3,30.39,72.3,33.7z"
                ></path>
                <path
                  fill="#7228ad"
                  d="M72.3,48.04V66.3c0,3.31-2.69,6-6,6H33.7c-3.31,0-6-2.69-6-6V33.7c0-3.31,2.69-6,6-6h18.26 C60.6,32.29,67.71,39.4,72.3,48.04z"
                ></path>
                <path
                  fill="#b11e93"
                  d="M70,71c0,0.01,0,0.01,0,0.02c-1.02,0.8-2.3,1.28-3.7,1.28H33.7c-3.31,0-6-2.69-6-6V33.7 c0-1.4,0.48-2.68,1.28-3.7c0.01,0,0.01,0,0.02,0C51.64,30,70,48.36,70,71z"
                ></path>
                <path
                  fill="#db1a58"
                  d="M62,71c0,0.44-0.01,0.87-0.03,1.3H33.7c-3.31,0-6-2.69-6-6V38.03C28.13,38.01,28.56,38,29,38 C47.23,38,62,52.77,62,71z"
                ></path>
                <path
                  fill="#e4273e"
                  d="M54,71c0,0.43-0.01,0.87-0.03,1.3H33.7c-3.31,0-6-2.69-6-6V46.03C28.13,46.01,28.57,46,29,46 C42.81,46,54,57.19,54,71z"
                ></path>
                <path
                  fill="#f47c22"
                  d="M47,71c0,0.44-0.02,0.87-0.05,1.3H33.7c-3.31,0-6-2.69-6-6V53.05C28.13,53.02,28.56,53,29,53 C38.94,53,47,61.06,47,71z"
                ></path>
                <path
                  fill="#ef9922"
                  d="M41,71c0,0.44-0.02,0.87-0.07,1.3H33.7c-3.31,0-6-2.69-6-6v-7.23C28.13,59.02,28.56,59,29,59 C35.63,59,41,64.37,41,71z"
                ></path>
                <path
                  fill="#472b29"
                  d="M66.3,73H33.7c-3.694,0-6.7-3.006-6.7-6.7V33.7c0-3.694,3.006-6.7,6.7-6.7h32.6 c3.694,0,6.7,3.006,6.7,6.7v32.6C73,69.994,69.994,73,66.3,73z M33.7,28.4c-2.923,0-5.3,2.377-5.3,5.3v32.6 c0,2.922,2.377,5.3,5.3,5.3h32.6c2.923,0,5.3-2.377,5.3-5.3V33.7c0-2.922-2.377-5.3-5.3-5.3H33.7z"
                ></path>
                <g>
                  <path
                    fill="#fff"
                    d="M49.99,65.45c-3.982,0-5.464-0.011-6.978-0.08c-1.388-0.062-2.469-0.271-3.505-0.677 c-1.006-0.388-1.793-0.899-2.553-1.659c-0.753-0.754-1.265-1.542-1.658-2.553c-0.395-1.007-0.604-2.088-0.677-3.505 c-0.069-1.525-0.08-3.006-0.08-6.977c0-3.964,0.011-5.442,0.08-6.968c0.062-1.388,0.271-2.468,0.676-3.504 c0.394-1.021,0.905-1.808,1.659-2.553c0.754-0.753,1.541-1.265,2.554-1.659c1.035-0.405,2.116-0.613,3.504-0.677 c1.565-0.07,3.065-0.09,6.978-0.09c3.914,0,5.411,0.02,6.967,0.09c1.388,0.063,2.469,0.271,3.506,0.677 c1.021,0.394,1.807,0.905,2.552,1.659c0.747,0.738,1.262,1.524,1.669,2.553c0.397,1.046,0.604,2.128,0.667,3.504 c0.07,1.58,0.09,3.078,0.09,6.967c0,3.897-0.02,5.397-0.09,6.978c-0.063,1.377-0.269,2.458-0.667,3.505 c-0.407,1.018-0.923,1.806-1.669,2.552c-0.743,0.752-1.527,1.264-2.543,1.659c-1.049,0.405-2.133,0.614-3.515,0.676 C55.443,65.439,53.964,65.45,49.99,65.45z M48.68,37.45c-2.752,0-4.263,0.021-5.575,0.079c-1.342,0.062-2.082,0.287-2.577,0.476 c-0.617,0.242-1.059,0.53-1.525,0.998c-0.467,0.466-0.755,0.905-0.993,1.516c-0.191,0.498-0.417,1.24-0.479,2.585 c-0.068,1.506-0.079,2.895-0.079,6.887c0,4,0.011,5.39,0.079,6.895c0.062,1.336,0.287,2.076,0.477,2.572 c0.239,0.619,0.526,1.061,0.99,1.525c0.473,0.465,0.916,0.752,1.53,0.994c0.479,0.188,1.204,0.411,2.576,0.475 c1.56,0.07,3.04,0.089,6.888,0.089c3.856,0,5.338-0.019,6.895-0.089c1.405-0.065,2.147-0.303,2.583-0.477 c0.604-0.234,1.044-0.518,1.514-0.978c0.466-0.476,0.755-0.919,1.001-1.534c0.186-0.487,0.405-1.217,0.469-2.575 c0.069-1.573,0.089-3.055,0.089-6.897c0-3.835-0.02-5.315-0.089-6.886c-0.063-1.356-0.282-2.086-0.467-2.57 c-0.239-0.62-0.525-1.061-0.99-1.525c-0.498-0.49-0.903-0.75-1.548-0.997c-0.464-0.185-1.178-0.408-2.56-0.473 c-1.535-0.07-3.018-0.089-6.896-0.089H48.68z"
                  ></path>
                  <path
                    fill="#472b29"
                    d="M49.99,34.8c3.909,0,5.405,0.019,6.956,0.09c1.359,0.061,2.415,0.265,3.428,0.66 c0.985,0.38,1.744,0.873,2.467,1.605c0.719,0.71,1.216,1.47,1.608,2.459c0.389,1.024,0.59,2.081,0.652,3.429 c0.07,1.576,0.089,3.072,0.089,6.957c0,3.893-0.019,5.39-0.089,6.966c-0.062,1.35-0.263,2.407-0.648,3.42 c-0.396,0.989-0.894,1.751-1.617,2.474c-0.716,0.725-1.473,1.219-2.453,1.6c-1.023,0.395-2.083,0.599-3.436,0.66 c-1.509,0.069-2.986,0.08-6.956,0.08c-3.978,0-5.458-0.011-6.967-0.08c-1.359-0.061-2.415-0.264-3.426-0.66 c-0.971-0.375-1.731-0.869-2.465-1.602c-0.728-0.729-1.222-1.489-1.603-2.468c-0.384-0.981-0.587-2.038-0.659-3.423 c-0.069-1.522-0.08-3.001-0.08-6.968c0-3.959,0.011-5.436,0.08-6.957c0.061-1.359,0.264-2.415,0.66-3.427 c0.38-0.985,0.873-1.745,1.603-2.465c0.727-0.727,1.488-1.221,2.467-1.602c1.009-0.394,2.065-0.598,3.424-0.66 C44.585,34.819,46.082,34.8,49.99,34.8 M49.99,62.79c3.861,0,5.345-0.019,6.907-0.089c1.443-0.067,2.211-0.314,2.658-0.493 c0.641-0.248,1.105-0.547,1.609-1.041c0.487-0.497,0.791-0.964,1.053-1.62c0.191-0.501,0.419-1.255,0.483-2.649 c0.07-1.576,0.089-3.061,0.089-6.908c0-3.839-0.019-5.322-0.089-6.898c-0.065-1.391-0.292-2.145-0.483-2.65 c-0.249-0.645-0.562-1.126-1.049-1.614c-0.518-0.509-0.96-0.794-1.625-1.048c-0.486-0.194-1.225-0.425-2.645-0.492 c-1.539-0.07-3.024-0.089-6.907-0.089H48.68c-2.756,0-4.27,0.021-5.588,0.079c-1.376,0.064-2.141,0.296-2.658,0.493 c-0.641,0.251-1.122,0.566-1.609,1.053c-0.487,0.486-0.801,0.965-1.051,1.605c-0.197,0.513-0.431,1.28-0.495,2.662 c-0.069,1.511-0.08,2.901-0.08,6.898c0,4.004,0.01,5.397,0.08,6.907c0.064,1.372,0.297,2.136,0.493,2.65 c0.252,0.654,0.556,1.121,1.05,1.615c0.491,0.482,0.973,0.795,1.613,1.046c0.496,0.194,1.247,0.426,2.656,0.492 C44.655,62.771,46.138,62.79,49.99,62.79 M49.99,34.3c-3.991,0-5.454,0.021-6.989,0.09c-1.417,0.064-2.522,0.279-3.583,0.693 c-1.047,0.408-1.86,0.937-2.639,1.714c-0.78,0.771-1.31,1.585-1.716,2.639c-0.416,1.062-0.63,2.168-0.693,3.584 c-0.069,1.537-0.08,3.019-0.08,6.979c0,3.969,0.011,5.452,0.08,6.99c0.075,1.444,0.289,2.549,0.693,3.583 c0.407,1.045,0.937,1.859,1.715,2.639c0.786,0.786,1.601,1.314,2.639,1.715c1.062,0.416,2.168,0.63,3.584,0.693 c1.537,0.07,3.02,0.081,6.989,0.081c3.96,0,5.441-0.01,6.979-0.081c1.41-0.063,2.519-0.277,3.594-0.693 c1.051-0.409,1.861-0.938,2.629-1.715c0.771-0.771,1.303-1.583,1.726-2.64c0.409-1.075,0.619-2.18,0.684-3.583 c0.068-1.536,0.09-3,0.09-6.989c0-3.979-0.021-5.443-0.09-6.979c-0.064-1.402-0.274-2.506-0.685-3.585 c-0.421-1.062-0.953-1.876-1.724-2.637c-0.771-0.78-1.584-1.309-2.639-1.716c-1.063-0.416-2.169-0.629-3.585-0.693 C55.443,34.321,53.982,34.3,49.99,34.3L49.99,34.3z M49.99,62.29c-3.842,0-5.32-0.019-6.876-0.089 c-1.336-0.062-2.036-0.278-2.496-0.458c-0.582-0.229-1-0.5-1.445-0.938c-0.441-0.441-0.705-0.846-0.934-1.438 c-0.182-0.476-0.399-1.195-0.46-2.494c-0.068-1.492-0.079-2.881-0.079-6.884c0-3.995,0.011-5.382,0.079-6.875 c0.061-1.308,0.278-2.026,0.462-2.506c0.225-0.574,0.497-0.99,0.938-1.43c0.44-0.441,0.856-0.713,1.438-0.941 c0.473-0.18,1.192-0.399,2.499-0.459C44.42,37.722,45.93,37.7,48.68,37.7h1.311c3.876,0,5.355,0.019,6.885,0.088 c1.346,0.063,2.033,0.277,2.482,0.457c0.612,0.234,0.99,0.478,1.46,0.94c0.436,0.436,0.708,0.854,0.934,1.438 c0.176,0.463,0.389,1.17,0.45,2.493c0.069,1.557,0.089,3.036,0.089,6.875c0,3.847-0.02,5.328-0.089,6.886 c-0.062,1.322-0.273,2.027-0.451,2.494c-0.234,0.586-0.501,0.996-0.943,1.448c-0.445,0.437-0.851,0.7-1.432,0.924 c-0.424,0.169-1.13,0.396-2.501,0.459C55.32,62.271,53.84,62.29,49.99,62.29L49.99,62.29z"
                  ></path>
                </g>
                <path
                  fill="#fff"
                  d="M58.5,43.25c-0.965,0-1.75-0.785-1.75-1.75s0.785-1.75,1.75-1.75h0.001 c0.467,0,0.906,0.182,1.236,0.512c0.331,0.331,0.513,0.77,0.513,1.237C60.25,42.465,59.465,43.25,58.5,43.25z"
                ></path>
                <path
                  fill="#472b29"
                  d="M58.5,40c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5S57,42.328,57,41.5 C57,40.672,57.672,40.001,58.5,40L58.5,40 M58.5,39.5L58.5,39.5c-1.103,0.001-2,0.898-2,2c0,1.103,0.897,2,2,2s2-0.897,2-2 S59.603,39.5,58.5,39.5L58.5,39.5z"
                ></path>
                <path
                  fill="#fff"
                  d="M49.988,41.504c-4.695,0-8.501,3.806-8.501,8.501s3.806,8.499,8.501,8.499 c4.695,0,8.499-3.805,8.499-8.499S54.682,41.504,49.988,41.504L49.988,41.504z M49.988,44.505c3.037,0,5.5,2.462,5.5,5.5 c0,3.037-2.463,5.5-5.5,5.5c-3.038,0-5.5-2.463-5.5-5.5C44.488,46.967,46.95,44.505,49.988,44.505z"
                ></path>
                <path
                  fill="#472b29"
                  d="M49.988,58.754c-4.825,0-8.751-3.925-8.751-8.75c0-4.825,3.926-8.75,8.751-8.75 c4.824,0,8.749,3.925,8.749,8.75C58.737,54.829,54.812,58.754,49.988,58.754z M49.988,41.754c-4.55,0-8.251,3.701-8.251,8.25 c0,4.549,3.701,8.25,8.251,8.25c4.549,0,8.249-3.701,8.249-8.25C58.237,45.455,54.537,41.754,49.988,41.754z M49.988,55.754 c-3.171,0-5.75-2.58-5.75-5.75s2.579-5.75,5.75-5.75s5.75,2.58,5.75,5.75S53.159,55.754,49.988,55.754z M49.988,44.754 c-2.895,0-5.25,2.355-5.25,5.25s2.355,5.25,5.25,5.25s5.25-2.355,5.25-5.25S52.883,44.754,49.988,44.754z"
                ></path>
              </svg>
              &nbsp; Instagram
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0078d4"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                ></path>
                <path
                  d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                  opacity=".05"
                ></path>
                <path
                  d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                  opacity=".07"
                ></path>
                <path
                  fill="#fff"
                  d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                ></path>
              </svg>
              &nbsp; LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <p>
          &copy; {year} <span id="title_footer">Saudade</span>. All rights
          reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer