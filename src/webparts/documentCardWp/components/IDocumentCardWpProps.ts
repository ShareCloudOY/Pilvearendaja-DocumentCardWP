import {IDocumentItem} from '../models/DocumentItem';

export interface IDocumentCardWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  documentItem: IDocumentItem;
}
