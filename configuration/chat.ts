import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s sneaker assistant. Ask me about upcoming drops, resale trends, or sneaker authentication!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I can't find that sneaker info right now. Try rephrasing your question or asking about a different release.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
