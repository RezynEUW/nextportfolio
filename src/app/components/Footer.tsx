export default function Footer() {
  return (
    <footer
      className="h-[70vh] bg-gray-800 text-white relative flex flex-col justify-end"
    >
      {/* Cropped and Inverted SVG at the top */}
      <div
        className="absolute top-[-8px] left-0 w-screen overflow-hidden" // Moves the SVG up by 8px
        style={{ height: "158px", clipPath: "inset(8px 0 0 0)" }} // Crops the top 8px
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1050 158"
          fill="none"
          className="w-full h-full"
          style={{
            display: "block", // Removes any inline spacing
            transform: "rotate(180deg)", // Invert SVG
          }}
        >
          <path
            d="M1 157H139.809H902.548H1049L898.524 145.275L874.928 76.5294H826.062H817.563L801.983 61.7059L786.402 76.5294H777.904L722.664 60.2941H712.04L693.627 20.3725L675.214 60.2941H661.758L612.183 40.5294H550.569L510.909 1L495.329 16.5294L479.748 1H348.73L332.441 40.5294V60.2941H282.867L272.952 70.1765H258.079L240.374 52.5294L222.669 70.1765H200.006L161.055 83.5882L143.055 145.784L1 157Z"
            fill="lightgray"
            stroke="white"
            strokeWidth={2}
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative w-full flex-grow flex items-center justify-center">
        <p>&copy; {new Date().getFullYear()} NextPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
