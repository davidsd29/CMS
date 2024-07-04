import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialSocials extends Schema.Component {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'socials';
    icon: 'earth';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.String;
    file: Attribute.Media<'files'>;
  };
}

export interface TimelineInfoBlob extends Schema.Component {
  collectionName: 'components_timeline_info_blobs';
  info: {
    displayName: 'info_blob';
    icon: 'quote';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social.socials': SocialSocials;
      'timeline.info-blob': TimelineInfoBlob;
    }
  }
}
