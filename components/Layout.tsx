type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <style jsx global>{`
        :root {
          --white: #fff;
          --max-width: 1080px;
          --n-space: min(max(12px, 3.5vmin), 30px);
          --n-space-s: min(max(8px, 2vmin), 20px);
          --n-space-xs: min(max(4px, 1vmin), 10px);
          --base: #0d131c;
          --primary: #181834;
          --secondary: #202a39;
          --secondary-hover: #263041;
          --tertiary: #93acd3;
          --red: #ed1d49;
          --blue: #2283f6;
          --radius: 12px;
          --h1: calc(32px + (42 - 32) * ((100vw - 360px) / (1920 - 360)));
        }

        body {
          color: var(--white);
          background: var(--primary);
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        a {
          text-decoration: none;
        }

        h1 {
          font-size: var(--h1);
        }

        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: var(--primary);
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: var(--blue);
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: var(--red);
        }

        .nav {
          background: var(--primary);
          width: 97%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          padding: var(--n-space-s) var(--n-space);
        }

        .logo {
          background-color: #6a0f0e;
          border-radius: 10px;
          padding: 36px 25px 16px 66px;
          margin: -30px 0 -20px -65px;
          display: flex;
          align-items: center;
        }

        .logo-inner {
          transform: skewY(3deg) skewX(17deg);
          display: flex;
          align-items: center;
        }

        .button-wrapper {
          display: flex;
          align-items: center;
        }

        .button-wrapper a:first-child {
          margin-right: var(--n-space-s);
        }

        .n-container {
          max-width: var(--max-width);
          margin: auto;
          padding: 0 var(--n-space);
        }

        .hero {
          padding-top: calc(var(--n-space) + var(--n-space) + var(--n-space));
        }

        .n-columns-gap {
          grid-gap: var(--n-space-s);
        }

        .n-columns-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .n-columns-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .n-columns-6 {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        .n-columns-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }

        .n-span-2 {
          grid-row: span 2 / span 2;
          grid-column: span 2 / span 2;
        }
        .n-row-span-2 {
          grid-row: span 2 / span 2;
        }
        .n-column-span-2 {
          grid-column: span 2 / span 2;
        }
        .n-card {
          border-radius: var(--radius);
          padding: var(--n-space-s);
          min-height: 50px;
          background: var(--secondary);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .n-card:hover {
          background: var(--secondary-hover);
        }
        .n-title {
          font-weight: 700;
          font-size: 1.1rem;
          z-index: 2;
        }
        .n-desc {
          font-size: 0.8rem;
          z-index: 2;
        }
        .card-blur {
          position: absolute;
          bottom: -40%;
          left: 50%;
          transform: translate3d(-50%, 0, 0);
          width: 210px;
          height: 155px;
          background: #0035f0;
          -webkit-filter: blur(60px);
        }
        .card-image {
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .n-slots {
          border-radius: var(--radius);
        }
        .bg-container {
          background: var(--primary);
          border-radius: var(--radius);
        }
        .padding-normal {
          padding: var(--n-space);
        }
        .padding-s {
          padding: var(--n-space-s);
        }
        .m-b-normal {
          margin-bottom: var(--n-space);
        }
        .middle {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .tabs,
        .tabs-blue {
          border-radius: var(--radius);
          padding: var(--n-space-s);
        }
        .tabs {
          background: var(--secondary);
        }

        .tabs-blue {
          background: var(--blue);
        }

        .tabs:hover,
        .tabs-blue:hover {
          background: var(--secondary-hover);
        }
        .tabs img,
        .tabs-blue img {
          margin-right: var(--n-space-s);
        }

        table {
          background: var(--primary);
          padding: var(--n-space);
          width: 100%;
          border-radius: var(--radius);
        }

        td {
          background: var(--secondary);
          border-radius: var(--radius);
          padding: var(--n-space-s);
        }

        @media only screen and (max-width: 768px) {
          .n-columns-m-1 {
            grid-template-columns: 1fr;
          }
          .n-columns-m-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          .n-columns-m-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          .n-span-2 {
            grid-row: span 2 / span 2;
            grid-column: span 2 / span 2;
          }
          .n-card {
            min-height: 100px;
          }
          .n-hidden {
            display: none;
          }
          .hero {
            margin-bottom: var(--n-space);
          }
          .nav {
            width: 93%;
          }
          .fixed-menu {
            position: fixed;
            display: grid;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 999;
            background: var(--primary);
          }
          .btn-footer {
            padding: var(--n-space-s);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
            color: var(--tertiary);
            border: var(--radius);
          }
          .btn-footer:hover {
            background: var(--secondary-hover);
            color: var(--red);
          }
          .btn-footer svg {
            width: 1.3rem;
            height: 1.3rem;
            margin-bottom: var(--n-space-xs);
            fill: var(--tertiary);
          }

          .active {
            background: var(--secondary-hover);
            color: var(--blue);
          }
          .active svg {
            fill: var(--blue);
          }
        }

        @media only screen and (min-width: 769px) {
          .fixed-menu {
            display: none;
          }
        }

        .btn,
        .btn-primary {
          background-color: var(--red);
        }

        .btn,
        .btn-primary,
        .btn-secondary {
          color: #fff;
          border-radius: var(--radius);
          text-align: center;
          font-weight: 700;
        }
        .btn-secondary {
          background: var(--blue);
        }
        .btn {
          padding: var(--n-space-s) var(--n-space);
          box-shadow: 0 0 25px rgb(237 29 73 / 50%);
        }

        .btn-primary,
        .btn-secondary {
          font-size: 15px;
          padding: var(--n-space-xs) var(--n-space-s);
        }
        .article {
          border: 1px solid var(--secondary);
          padding: var(--n-space);
          border-radius: var(--radius);
        }
        .contain {
          padding: var(--n-space);
        }
        .article p,
        li {
          color: #d6dce5;
          line-height: 1.6;
        }
        .article a {
          color: var(--red);
        }
        .article amp-img {
          border-radius: var(--radius);
          margin-bottom: var(--n-space-s);
        }
        blockquote {
          background: var(--secondary);
          padding: var(--n-space-s) var(--n-space);
          margin: 0;
          border-radius: var(--radius);
          position: relative;
        }
        blockquote::before {
          content: "";
          width: 3px;
          background: var(--red);
          position: absolute;
          left: 0;
          top: calc(var(--n-space-s) + var(--n-space-s));
          height: calc(100% - (var(--n-space) + var(--n-space)));
        }
        .seo-accordion {
          width: 100%;
        }
        .seo-accordion .accordion {
          position: relative;
          display: block;
          margin: 0;
        }
        .seo-accordion .accordion input {
          position: absolute;
          opacity: 0;
          z-index: -1;
        }
        .seo-accordion .accordion .btn-accordion {
          display: block;
          text-align: left;
          margin-bottom: var(--n-space-s);
          border: 0;
          border-radius: var(--radius);
          background: var(--secondary);
          color: var(--white);
          font-weight: 700;
          cursor: pointer;
          padding: var(--n-space);
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .seo-accordion .accordion .btn-accordion:hover {
          background: var(--secondary-hover);
        }
        .seo-accordion .accordion .btn-accordion:focus,
        .seo-accordion .accordion .btn-accordion:active {
          outline: none;
        }
        .seo-accordion .accordion input:checked ~ .btn-accordion {
          background: var(--secondary-hover);
        }
        .seo-accordion .accordion .btn-accordion .arrow {
          float: right;
          width: 24px;
          height: 24px;
          border: 1px solid var(--red);
          border-radius: var(--radius);
        }
        .seo-accordion .accordion input:checked ~ .btn-accordion .arrow {
          transform: rotate(180deg);
        }
        .seo-accordion .accordion .btn-accordion .arrow path {
          fill: var(--white);
        }
        .seo-accordion .accordion .content-accordion {
          width: 100%;
          padding: 0;
          margin: 5px 0;
          display: none;
        }
        .seo-accordion .accordion .content-accordion p {
          margin: var(--n-space);
          padding: 0;
        }
        .seo-accordion .accordion input:checked ~ .content-accordion {
          display: block;
          pointer-events: all;
          visibility: visible;
        }
      `}</style>
    </>
  );
}
