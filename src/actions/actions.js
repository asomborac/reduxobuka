import * as actionTypes from './actionTypes';

export const createEntry = entry => {
    return {
        type: actionTypes.CREATE_NEW_ENTRY,
        entry: entry
    }
}

export const deleteEntry = index => {
    return {
        type: actionTypes.DELETE_ENTRY,
        index: index
    }
}

export const resetEntries = e => {
    return {
        type: actionTypes.RESET_ENTRIES
    }
}

// ova funkcija vraca objekat koji opisuje dve stvari
// opisuje tip akcije i gde je tip definisan
// i teret koji ona prenosi

// ova funkcija je ustvari action creator ne sama akcija
// korak 1 na slici, pravi format koji ce sistem razumeti
// pakuje podatke prosledjene akcijom

// obe funkcije rade slicnu stvar, proslede 
// akciju i vrednost iako rade razlicite stvari