import { useState } from "react";
import "./App.css";
import Dna from "./Components/dna";

function App() {
  const [curretlyOpen, setCurrentlyOpen] = useState(0);

  return (
    <>
      <div className="mainGridContainer">
        <header>
          <span>
            Kirti <b>Shreyaa</b>
          </span>
          <div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
        </header>
        <div className="titleContainer">
          <Dna />
          <span>
            Focused on <b>omics data analysis and precision medicine in genomics</b>
          </span>
        </div>
        <div className="photoContainer" style={{ backgroundImage: "url(https://picsum.photos/id/870/200/300?grayscale)" }}></div>
        <div className="descriptionContainer">
          <div className="scrollText">
            <div className="scrollTextIn">
              ATGCGTACGTTAGCAGTACGATCGTAGCTAGTACGATGCTAGTGCTAGCTGACTGATCGTACGTAGCTAGCTAGTACGATCGTACGATCGTACGATGCATGCTAGTACGATGCTAGCTAGCTAGCGTACGATCGTAGCTAGCTGATCGTACGATGCTAGCGTACGATCGTACGATCGTACGAGTACGATGCTAGTACGATGCTAGTACGAGTACGTA
            </div>
          </div>
          <div>
            I'm a recent graduate from the University of Massachusetts, Dartmouth, with a deep interest in bioinformatics and computational
            biology. My expertise includes genomics, RNA-Seq analysis, and data handling, with a background in computer science that has
            honed my skills in algorithms, database management, and memory optimization.
          </div>
        </div>
        <div className="contactContainer">
          <div>Curious about something?</div>
          <b>Contact me</b>
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
          <div>Mail</div>
          <div>LinkedIn</div>
          <div>GitHub</div>
        </div>
      </div>
    </>
  );
}

export default App;
