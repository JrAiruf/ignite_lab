import { Content } from "./content";
import { Notifications } from "./notifications"

describe('Notification content', () => {
    it('Should create notification', () => {
        const notification = new Notifications({
            content: new Content('Nova solicitação de amizade'),
            category: 'Social',
            recipientId: 'adofaflkhnalsjdfnlakndlknasgçPÇBPÇK',
        }
        );
    },);
},)