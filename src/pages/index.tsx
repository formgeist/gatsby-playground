import React from 'react';
import MyComponent from '../components/my_component';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiStat,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';

fetch(
  '/remote_kibana/api/saved_objects/_find?type=index-pattern&search_fields=title&search=my*',
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'kbn-xsrf': '8.0.0',
    },
  }
);

export default () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Service landing page prototype</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>APM summary</h2>
            </EuiTitle>
            <EuiSpacer />
            <EuiStat title="27" description="Total services" />
          </EuiPageContentHeaderSection>
          <EuiPageContentHeaderSection />
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <MyComponent />
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);
