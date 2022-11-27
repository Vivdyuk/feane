import { LoremIpsum } from "lorem-ipsum";

export const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 4,
        min: 2
    },
    wordsPerSentence: {
        min: 4,
        max: 10
    }
})