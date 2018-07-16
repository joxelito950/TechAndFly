import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

class LanguageProvider extends React.PureComponent {
  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.element.isRequired
};

LanguageProvider.defaultProps = {
  locale: 'es',
  messages: { es: '' }
};

export default LanguageProvider;
