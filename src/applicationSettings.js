import {writable} from 'svelte/store';

export const applicationName = writable("Fate Character Creation Worksheet" );

export const sheetName = writable("Character Creation Worksheet" );

export const fileExtension = writable("fccwks");

export const sheetSuffix = writable("character-creation-data");

export const sheetPrefix = writable("fate-core-character-creation-worksheet-");
