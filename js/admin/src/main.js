import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';
import CookieConsentSettingsModal from 'zaptech/cookie-consent/components/CookieConsentSettingsModal';
import Page from 'flarum/components/Page';

app.initializers.add('zaptech-cookie-consent', () => {
  app.extensionSettings['zaptech-cookie-consent'] = () => app.modal.show(new CookieConsentSettingsModal());
      extend(Page.prototype, 'init', function() {
        var ctext = app.forum.attribute("cookie-consent.ctext");
        console.log(ctext);
        console.log("Hello World");
      });
  });