import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const overrideHeader = (state, previous, next) => {
  return (
    <div className="flex justify-between items-center px-5 my-1">
      <p>{"Hi"}</p>
      <div className="flex items-center justify-between"></div>
    </div>
  );
};

const PreviewFileModal = () => {
  const docs = [
    { uri: "/sample.pdf", fileType: "pdf" },
    {
      uri: "/img/quick-start-doctor.png",
      fileType: "png",
    },
    {
      uri: "https://docs.google.com/document/d/13n4HGsSbT6CuACWHkGvtvboFtsFCPObozDTEcTKHq34/edit?usp=sharing",
      fileType: "docx",
    },
  ];

  return (
    <>
      <DocViewer
        config={{
          header: {
            // overrideComponent: overrideHeader,
          },
        }}
        pluginRenderers={DocViewerRenderers}
        documents={docs}
      />
    </>
  );
};

export default PreviewFileModal;
