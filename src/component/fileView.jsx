import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

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
    { uri: "/samplepdf.pdf", fileType: "pdf" },
    {
      uri: "https://uploads.codesandbox.io/uploads/user/46ef5051-8a21-46a0-ab94-60d6cd53ab10/l5RA-test-doc.docx",
      fileType: "docx",
    },
    {
      uri: "https://uploads.codesandbox.io/uploads/user/46ef5051-8a21-46a0-ab94-60d6cd53ab10/jYVg-test-excelaki.xlsx",
      fileType: "xlsx",
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
