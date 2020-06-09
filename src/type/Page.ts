export class Page {
  private readonly name: string;
  private readonly path: string;

  public static readonly INDEX: Page = new Page('Home', '/');
  public static readonly ABOUT: Page = new Page('About', '/about');
  public static readonly EVENTS: Page = new Page('Events', '/events');
  public static readonly TABLETOP_GAMES: Page = new Page('Tabletop games', '/tabletop-games');
  public static readonly PRICING: Page = new Page('Pricing', '/pricing');
  public static readonly CONTACT: Page = new Page('Contact', '/contact');
  public static readonly NONE: Page = new Page('None', '');

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
