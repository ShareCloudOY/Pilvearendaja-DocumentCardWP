import * as React from 'react';
import styles from './DocumentCardWp.module.scss';
import { IDocumentCardWpProps } from './IDocumentCardWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  DocumentCard,
  DocumentCardType,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';

export default class DocumentCardWp extends React.Component<IDocumentCardWpProps, {}> {
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: String(require('./document-preview.png')),
          iconSrc: String(require('./icon-ppt.png')),
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ],
    };
  
    return (
      <DocumentCard type={DocumentCardType.normal} onClickHref={this.props.documentItem.absoluteUrl}>
        <DocumentCardPreview { ...previewProps } />
        <DocumentCardTitle title={this.props.documentItem.fileName} />
        <DocumentCardActivity
          activity='Created Feb 23, 2016'
          people={
            [
              { name: this.props.documentItem.author, profileImageSrc: String('/_layouts/15/userphoto.aspx?size=L&username='+this.props.documentItem.authorUserName) }
            ]
          }
        />
      </DocumentCard>
    );
  }
}
