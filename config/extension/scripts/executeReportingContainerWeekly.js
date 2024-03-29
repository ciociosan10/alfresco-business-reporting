/**
 * Copyright (C) 2011 - 2013 Alfresco Business Reporting project
 *
 * This file is part of the Alfresco Business Reporting project.
 *
 * Licensed under the GNU LGPL, Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.gnu.org/licenses/lgpl.html
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//We need companyhome, especially if we run from classpath instead of DataDictionary/Repository
var companyhome = search.luceneSearch("PATH:\"/app:company_home\"")[0];

try{
	var report = actions.create("report-root-executer");
	report.parameters.executionFrequency="weekly";
	report.execute(companyhome);
} catch (whatever){
// do nothing
} finally {
	var goBack = "<script>history.back();</script>";
	goBack;
}