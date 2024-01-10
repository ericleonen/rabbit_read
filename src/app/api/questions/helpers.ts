export function sentencifyText(text: string) {
    const sentencifier = new Intl.Segmenter(["en"], {
        granularity: "sentence"
    });
    
    return sentencifier.segment(text);
}

export function sectionifySentences(sentences: string[], numSections: number) {
    
}