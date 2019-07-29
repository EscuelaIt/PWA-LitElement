export const FeedbackEmmiterMixin = (Superclass) => class extends Superclass {
  positiveFeedback(msg) {
    this.dispatchEvent(new CustomEvent('positive-feedback', {
      bubbles: true,
      composed: true,
      detail: msg
    }));
  }
  negativeFeedback(msg) {
    this.dispatchEvent(new CustomEvent('negative-feedback', {
      bubbles: true,
      composed: true,
      detail: msg
    }));
  }
}