class domNoResult {
  static toto(displayedResult) {
    const div = document.createElement('div');
    div.classList.add('noResult');
    div.setAttribute('id', 'Noresult');

    const p = document.createElement('p');
    p.classList.add('noResult__text');
    p.innerHTML = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc';

    div.appendChild(p);
    // Add div element in article
    document.querySelector('article').appendChild(div);

    if (displayedResult.length < 1) {
      if (!document.getElementById('Noresult').classList.contains('noResult--hide')) {
        document.getElementById('Noresult').classList.add('noResult--hide');
      }
    } else if (document.getElementById('Noresult').classList.contains('noResult--hide')) {
      document.getElementById('Noresult').classList.remove('noResult--hide');
    }
  }
}

export default domNoResult;
