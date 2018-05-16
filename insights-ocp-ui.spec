%global project       RedhatInsights
%global repo         insights-ocp-ui
%global commit        v0.0.1
%global shortcommit   %(c=%{commit}; echo ${c:0:7})
%define debug_package %{nil}

Name:          insights-ocp-ui
Version:        0.0.1
Release:        2%{?dist}
Summary:        Insights UI for Openshift Container Platform Image scanning
License:        ASL 2.0
URL:            https://github.com/redhatinsights/insights-ocp-ui
Source0:        https://github.com/%{project}/%{repo}/archive/%{commit}/%{repo}-%{version}.tar.gz


%description
Insights UI for Openshift Container Platform Image scanning

%prep
%setup -qn %{name}

%build
%{__rm} -f .gitignore

%install
mkdir -p %{buildroot}/opt/insights-ocp-ui
cp -r ./ %{buildroot}/opt/insights-ocp-ui


%files
#%doc LICENSE README.md
/opt/insights-ocp-ui



%clean
rm -rf %{buildroot}


%changelog
* Tue May 08 2018 Lindani Phiri <lphiri@redhat.com> - 0.0.1-2
- Address RPM diff issues 
- Scan in controller 

* Wed May 02 2018 Lindani Phiri <lphiri@redhat.com> - 0.0.1-1
- Initial Release

* Wed Apr 25 2018 Lindani Phiri <lphiri@redhat.com> - 0.0.1-0.alpha1
- Initial Build (Alpha)
