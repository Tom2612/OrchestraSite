import React from 'react';

export default function Main() {
    return (
        <main>
            <h2>Find your next piece!</h2>
            <label for="composer">Search for composer: </label>
            <select name="composer" id="composer">
                <option value="">--Select Composer--</option>
                <option value="beethoven">Beethoven</option>
                <option value="mahler">Mahler</option>
                <option value="sibelius">Sibelius</option>
            </select>
        </main>
    )
}