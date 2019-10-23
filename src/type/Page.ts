export class Page {
  private name: string;

  public static INDEX: Page = new Page('Home');
  public static ABOUT: Page = new Page('About');
  public static EVENTS: Page = new Page('Events');
  public static TABLETOP_GAMES: Page = new Page('Tabletop games');
  public static PRICING: Page = new Page('Pricing');
  public static CONTACT: Page = new Page('Contact');

  private constructor(name: string) {
    this.name = name;
  }

  public is(name: string): boolean {
    if (this.name === name) {
      return true;
    }

    return false;
  }
}
