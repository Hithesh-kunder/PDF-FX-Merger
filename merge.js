const PDFMerger = require('pdf-merger-js');

const mergePdfs = async (p1, p2) => {
    const merger = new PDFMerger();
    await merger.add(p1);
    await merger.add(p2);
    const d = Date.now();
    await merger.save(`public/${d}.pdf`);
    return d

    // Export the merged PDF as a Node.js Buffer
    // const mergedPdfBuffer = await merger.saveAsBuffer();
    // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = {mergePdfs}