











/*---------------------------------------------------------------------------------------------
 *  copyright (c) 2024 BioBit Games Ltda.
 *  all rights reserverds.
 *---------------------------------------------------------------------------------------------*/

// RANGE PROGRESS : 

/* function see the visual progress of input range
 * @param {HTMLElement} - input range to show the progress */


let PrimaryColorr = "red";

export class RangeProgress{
  constructor(rangeEl) {
    this.rangeEl = rangeEl;
    this.rangeEl.addEventListener("input", this.updateProgress.bind(this));
    this.rangeEl.addEventListener("click", () => {
      this.updateProgress();
    });
  } 

  updateProgress() {
    const percentage = (this.rangeEl.value / this.rangeEl.max) * 100;
    this.rangeEl.style.background = `linear-gradient(90deg, ${PrimaryColorr} ${percentage}%, #171717 ${percentage}%)`;
  } 
}
