/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojlabel'],
    function (oj, ko, $) {

        function DashboardViewModel() {
            var self = this;
            // Below are a set of the ViewModel methods invoked by the oj-module component.
            // Please reference the oj-module jsDoc for additional information.
            this.data = ko.observable("ColumnA\\tColumnB\\tColumnC\\tColumnD\\n1\\t2\\t3\\t4\\na\\tb\\tc\\td");

            self.submitInput = function () {
                var element1 = document.getElementById("text-input");
                element1.validate().then(function (result1) {
                    if (result1 === "valid") {
                        console.log(stringToAreaChart(element1.value));
                    }
                });
            };

            function stringToAreaChart(data) {
                var result = {series: [], groups: []};
                var lines = data.split("\\n");// split the data string into separated lines
                //console.log("lines");
                //console.log(lines);
                var headers = lines[0].split("\\t"); // split the first line that contains series' names
                //console.log("headers");
                //console.log(headers);

                for (var i = 0; i < headers.length; i++) {
                    result.series[i] = {name: headers[i].length === 0 ? "Serie " + (i + 1) : headers[i], items: []};
                    result.groups.push("Q" + (i + 1));
                }

                for (var i = 0; i < result.series.length; i++) {
                    //console.log("S" + i);
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
