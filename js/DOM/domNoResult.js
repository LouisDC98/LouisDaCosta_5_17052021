class domNoResult {
  static createNoResult() {
    const div = document.createElement('div');
    div.classList.add('noResult');
    div.setAttribute('id', 'Noresult');

    const p = document.createElement('p');
    p.classList.add('noResult__text');
    p.innerHTML = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc';

    div.appendChild(p);
    // Add div element in article
    document.querySelector('article').appendChild(div);
  }

  static toggleNoResult(displayedResult) {
    if (displayedResult.length < 1) {
      if (!document.getElementById('Noresult').classList.contains('noResult--show')) {
        document.getElementById('Noresult').classList.add('noResult--show');
      }
    } else if (document.getElementById('Noresult').classList.contains('noResult--show')) {
      document.getElementById('Noresult').classList.remove('noResult--show');
    }
  }
}

export default domNoResult;
