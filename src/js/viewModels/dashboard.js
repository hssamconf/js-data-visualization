/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojlabel', 'ojs/ojchart', 'ojs/ojselectcombobox'],
    function (oj, ko, $) {

        function DashboardViewModel() {
            var self = this;
            // Below are a set of the ViewModel methods invoked by the oj-module component.
            // Please reference the oj-module jsDoc for additional information.
            this.dataAreaChart = ko.observable("Series 1\\tSeries 2\\tSeries 3\\tSeries 4\\n74\\t50\\t34\\t18\\n42\\t58\\t22\\t6\\n70\\t46\\t30\\t14\\n46\\t54\\t32\\t22");
            this.dataScatterChart = ko.observable("Series 1\\tSeries 2\\tSeries 3\\tSeries 4\\n15,15\\t25,15\\t17,36\\t38,22\\n25,43\\t55,45\\t32,52\\t43,43\\n25,25\\t57,47\\t26,28\\t58,36");
            this.data = ko.observable();
            this.areaSeriesValue = ko.observableArray();
            this.areaGroupsValue = ko.observableArray();
            this.scatterSeriesValue = ko.observableArray();
            this.scatterGroupsValue = ko.observableArray();
            this.selectedOption = ko.observable();

            self.submitInput = function () {
                var element1 = document.getElementById("text-input");
                element1.validate().then(function (result1) {
                    if (result1 === "valid") {
                        var select1 = document.getElementById("basicSelect");
                        if (select1.value != null && select1.value === "AREA"){
                            var res = stringToAreaChart(element1.value);
                            self.areaSeriesValue(res.series);
                            self.areaGroupsValue(res.groups);
                        }else if(select1.value != null && select1.value === "SCATTER"){
                            var res = stringToScatterChart(element1.value);
                            self.scatterSeriesValue(res.series);
                            self.scatterGroupsValue(res.groups);
                        }
                    }
                });
            };

            function stringToAreaChart(data) {
                var result = {series: [], groups: []};
                var lines = data.split("\\n");// split the data string into separated lines
                var headers = lines[0].split("\\t"); // split the first line that contains series' names
                for (var i = 0; i < headers.length; i++)
                    result.series[i] = {name: headers[i].length === 0 ? "Serie " + (i + 1) : headers[i], items: []};
                for (var i = 1; i < lines.length; i++)
                    result.groups.push("Q" + (i));
                for (var i = 0; i < result.series.length; i++) {
                    for (var j = 1; j < lines.length; j++) {
                        //console.log("L" + j);
                        var colonnes = lines[j].split("\\t");
                        //console.log("insert in items of S" + i + " : col" + i);
                        if (colonnes[i] !== undefined)
                            result.series[i].items.push(colonnes[i]);
                    }
                }
                return result;
            }

            function stringToScatterChart(data) {
                var result = {series: [], groups: []};
                var lines = data.split("\\n");// split the data string into separated lines
                var headers = lines[0].split("\\t"); // split the first line that contains series' names
                for (var i = 0; i < headers.length; i++)
                    result.series[i] = {name: headers[i].length === 0 ? "Serie " + (i + 1) : headers[i], items: []};
                for (var i = 1; i < lines.length; i++)
                    result.groups.push("Q" + (i));
                for (var i = 0; i < result.series.length; i++) {
                    for (var j = 1; j < lines.length; j++) {
                        //console.log("L" + j);
                        var colonnes = lines[j].split("\\t");
                        //console.log("insert in items of S" + i + " : col" + i);
                        //console.log("colonne = " + colonnes[i]);
                        if (colonnes[i] !== undefined) {
                            var coord = colonnes[i].split(",");
                            //console.log("x = " + coord[0] + ",y = " + coord[1]);
                            result.series[i].items.push({x: coord[0], y: coord[1]});
                        }
                    }
                }
                return result;
            }

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * This method might be called multiple times - after the View is created
             * and inserted into the DOM and after the View is reconnected
             * after being disconnected.
             */
            self.connected = function () {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after the View is disconnected from the DOM.
             */
            self.disconnected = function () {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after transition to the new View is complete.
             * That includes any possible animation between the old and the new View.
             */
            self.transitionCompleted = function () {
                // Implement if needed
            };
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constructed
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new DashboardViewModel();
    }
)
;
