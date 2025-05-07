import { useRef, useState } from "react";
import "./App.css";
import Dna from "./Components/Dna";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Links from "./Components/Links";
import Link from "./Components/Links";

function App() {
  gsap.registerPlugin(useGSAP);
  const photoContainer = useRef();
  const photoMask = useRef();
  const contactFormMask = useRef();
  const contactForm = useRef();

  useGSAP(() => {
    gsap.to(photoContainer.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 3,
      ease: "power2.out",
      delay: 1,
    });
    gsap.to(photoMask.current, {
      x: "0vw",
      y: "0vh",
      scale: 0,
      duration: 2,
      ease: "power2.out",
      opacity: 0,
      delay: 1,
    });
  }, []);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleContactClick = () => {
    if (isContactOpen) return; // Do nothing if already open

    setIsContactOpen(true);

    gsap.to(contactFormMask.current, {
      opacity: 0.8,
      duration: 1,
      ease: "power2.out",
      pointerEvents: "auto",
    });
    gsap.fromTo(contactForm.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power2.out" });
  };

  const closeContactForm = () => {
    setIsContactOpen(false);
    console.log("called");

    gsap.to(contactFormMask.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      pointerEvents: "none",
    });
    gsap.to(contactForm.current, { scale: 0, opacity: 0, duration: 0.5, ease: "power2.in" });
  };

  const [curretlyOpen, setCurrentlyOpen] = useState(0);

  return (
    <>
      <div className="mainGridContainer">
        <header>
          <span>
            Kirti <b>Shreyaa</b>
          </span>
          <div>
            <Link text="Projects" />
            <Link text="Contact" onClick={handleContactClick} />
          </div>
        </header>
        <div className="titleContainer">
          <Dna />
          <span>
            Focused on <b>omics data analysis and precision medicine in genomics</b>
          </span>
        </div>
        <div
          className="photoContainer"
          ref={photoContainer}
          style={{ backgroundImage: "url(https://picsum.photos/id/870/600/900?grayscale)", transform: "translate(-10vw, 15vh) scale(1.5)" }}
        ></div>
        <div className="photoMask" ref={photoMask}></div>
        <div className="descriptionContainer">
          <div className="scrollText">
            <div className="scrollTextIn">
              ATGCGTACGTTAGCAGTACGATCGTAGCTAGTACGATGCTAGTGCTAGCTGACTGATCGTACGTAGCTAGCTAGTACGATCGTACGATCGTACGATGCATGCTAGTACGATGCTAGCTAGCTAGCGTACGATCGTAGCTAGCTGATCGTACGATGCTAGCGTACGATCGTACGATCGTACGAGTACGATGCTAGTACGATGCTAGTACGAGTACGTA
            </div>
          </div>
          <div></div>
          <div>
            I'm a recent graduate from the University of Massachusetts, Dartmouth, with a deep interest in bioinformatics and computational
            biology. My expertise includes genomics, RNA-Seq analysis, and data handling, with a background in computer science that has
            honed my skills in algorithms, database management, and memory optimization.
          </div>
        </div>
        <div className="contactContainer" onClick={handleContactClick}>
          <div className="contactContainerHeader">
            <div>Curious about something?</div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="var(--blue)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <b>Contact me</b>
          <div
            className="contactFormMask"
            ref={contactFormMask}
            onClick={(e) => {
              e.stopPropagation();
              closeContactForm();
            }}
          ></div>
          <div className="contactForm" ref={contactForm} onClick={(e) => e.stopPropagation()}>
            <div className="contactFormHeader">
              <h4>Drop a message</h4>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                onClick={(e) => {
                  e.stopPropagation();
                  closeContactForm();
                }}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g fill="none" fill-rule="evenodd">
                    <path d="m0 0h32v32h-32z"></path>
                    <path
                      d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm-2.8284271 11.7573593c-.3905243-.3905243-1.0236893-.3905243-1.4142136 0s-.3905243 1.0236893 0 1.4142136l2.8284271 2.8284271-2.8284271 2.8284271c-.3905243.3905243-.3905243 1.0236893 0 1.4142136s1.0236893.3905243 1.4142136 0l2.8284271-2.8284271 2.8284271 2.8284271c.3905243.3905243 1.0236893.3905243 1.4142136 0s.3905243-1.0236893 0-1.4142136l-2.8284271-2.8284271 2.8284271-2.8284271c.3905243-.3905243.3905243-1.0236893 0-1.4142136s-1.0236893-.3905243-1.4142136 0l-2.8284271 2.8284271z"
                      fill="var(--blue)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <div>Name</div>
              <input type="text" />
            </div>
            <div>
              <div>Email</div>
              <input type="email" />
            </div>
            <div>
              <div>Message</div>
              <textarea rows={5} />
            </div>
            <button>Send</button>
          </div>
        </div>
        <div className="projectsContainer">
          <b>Research Paper</b>
          <div tabIndex={0} className={curretlyOpen === 0 ? " open" : ""} onClick={() => setCurrentlyOpen(0)}>
            <b>Overview</b>
            <div>
              This study uses computational methods to identify thyroid cancer biomarkers from GEO datasets. By analyzing DEGs with tools
              like EdgeR, DAVID, and KEGG, it highlights key genes (APOC1, CHI3L1, SERPINA1) linked to cancer progression, aiding in
              diagnosis and targeted therapy development.
            </div>
          </div>
          <div tabIndex={0} className={curretlyOpen === 1 ? " open" : ""} onClick={() => setCurrentlyOpen(1)}>
            <b>Technologies & Tools</b>
            <div>
              <div>Languages: R, Python, Excel</div>
              <div>Bioinformatics Tools: GEO2R, EdgeR, DAVID, KEGG, STRING, Cytoscape, GSEA</div>
              <div>Visualization: Heatmaps, PCA, UpSet Plots, PPI Networks</div>
              <div>Statistical Methods: T-Test, FDR adjustment, Log2FC</div>
            </div>
          </div>
          <div tabIndex={0} className={curretlyOpen === 2 ? " open" : ""} onClick={() => setCurrentlyOpen(2)}>
            <b>Methodology</b>
            <div>
              <div>Data collection from GEO (5 datasets).</div>
              <div>Preprocessing and normalization in R and Excel.</div>
              <div>Differential gene expression analysis using EdgeR and T-Test.</div>
              <div>Integration of DEGs across datasets.</div>
              <div>Functional annotation via DAVID and KEGG.</div>
              <div>Protein interaction mapping with STRING and Cytoscape.</div>
              <div>Survival analysis with GSEA.</div>
            </div>
          </div>
          <div tabIndex={0} className={curretlyOpen === 3 ? " open" : ""} onClick={() => setCurrentlyOpen(3)}>
            <b>Key Findings</b>
            <div>
              <div>Top Biomarkers: APOE, SERPINA1, CHI3L1, APOC1, HMGA2, LRP1B, LIPH.</div>
              <div>Pathways Involved: Notch signaling, TGF-beta, cholesterol metabolism, immune response.</div>
              <div>Biological Insight: Strong association of lipid metabolism and immune evasion in thyroid cancer.</div>
            </div>
          </div>
          <div tabIndex={0} className={curretlyOpen === 4 ? " open" : ""} onClick={() => setCurrentlyOpen(4)}>
            <b>Links & Resources</b>
            <div>
              <div>Github Repo</div>
              <div>Dataset on GEO</div>
              <div>Full Report [PDF]</div>
            </div>
          </div>
        </div>
        <div className="socialContainer">
          <Links text="Email" link="mailto:kirtishreyaa2000@gmail.com" />
          <Links text="GitHub" link="https://github.com/KiShrey" />
          <Links text="LinkedIn" link="https://www.linkedin.com/in/kirti-shreyaa/" />
        </div>
      </div>
    </>
  );
}

export default App;
