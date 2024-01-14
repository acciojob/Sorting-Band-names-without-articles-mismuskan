//your code here
  let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Queen', 'Aerosmith'];

    // Remove articles ('a', 'an', 'the') and sort the band names
    let sortedBandNames = bandNames.map(name => name.replace(/^(a|an|the)\s/i, '').trim()).sort();

    // Create HTML list
    let ul = document.createElement('ul');
    ul.id = 'band';

    sortedBandNames.forEach(name => {
        let li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    });

    // Append the list to the body
    document.body.appendChild(ul);
