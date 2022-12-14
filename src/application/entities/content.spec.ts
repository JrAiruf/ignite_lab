import { Content } from "./content"

describe('Notification content', () => {
    it('Should create notification content', () => {
        const content = new Content('Você recebeu uma nova solicitação de amizade!');
        expect(content).toBeTruthy();
    })
    it("Should'nt create notification content with less than 5 characters", () => {
        expect(() => new Content('aaa')).toThrow();
    })
    it("Should'nt create notification content with more than 240 characters", () => {
        expect(() => new Content('a'.repeat(244))).toThrow();
    })
})