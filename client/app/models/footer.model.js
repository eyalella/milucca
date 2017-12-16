const MEGA_FOOTER = {
  custom: null,
  errorCode: 0,
  errorMessage: null,
  body: [
    {
      name: 'Face',
      subtitle: 'Consectetur adipiscing elit. Cras ultricies auctor neque.',
      image: null,
      url: null,
      fotterItems: [
        {
          name: 'Poweder',
          url: null,
          items: [
            {
              name: 'EyeShadow',
              url: 'http://95.183.6.118:5001\\he-IL/product/EyeShadow',
              items: null
            },
            {
              name: 'EyeShadow',
              url: 'http://95.183.6.118:5001\\he-IL/product/EyeShadow',
              items: null
            }
          ]
        },
        {
          name: 'CC Face',
          url: null,
          items: [
            {
              name: 'EyeShadow',
              url: 'http://95.183.6.118:5001\\he-IL/product/EyeShadow',
              items: null
            }
          ]
        }
      ]
    },
    {
      name: 'Lips',
      subtitle: null,
      image: null,
      url: null,
      fotterItems: [
        {
          name: 'Lipstick',
          url: null,
          items: []
        },
        {
          name: 'Mascara',
          url: null,
          items: [
            {
              name: 'EyeShadow',
              url: 'http://95.183.6.118:5001\\he-IL/product/EyeShadow',
              items: null
            }
          ]
        }
      ]
    },
    {
      name: 'Eyes',
      subtitle: null,
      image: null,
      url: null,
      fotterItems: []
    }
  ]
};

class FooterModel {
  constructor($timeout) {
    'ngInject';
    this._$timeout = $timeout;
  }

  get footerMenu() {
    return this._$timeout(() => {
      return MEGA_FOOTER.body;
    });
  }
}

export default FooterModel;
