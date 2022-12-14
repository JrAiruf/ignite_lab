export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }
  constructor(content: string) {
    const validContent = this.validateContentLenght(content);

    if (!validContent) {
      throw new Error('Content Lenght error');
    }
    this.content = content;
  }

  private validateContentLenght(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
