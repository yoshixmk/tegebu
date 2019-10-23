export class Page {
  private name: string;
  private path: string;

  public static INDEX: Page = new Page('Home', '/');
  public static ABOUT: Page = new Page('About', '/about');
  public static EVENTS: Page = new Page('Events', '/events');
  public static TABLETOP_GAMES: Page = new Page('Tabletop games', '/tabletop-games');
  public static PRICING: Page = new Page('Pricing', '/pricing');
  public static CONTACT: Page = new Page('Contact', '/contact');

  private constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }

  public getName(): string {
    return this.name;
  }

  public getPath(): string {
    return this.path;
  }
}
