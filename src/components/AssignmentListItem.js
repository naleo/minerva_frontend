import React from "react";
import { Link } from "react-router-dom";

const AssignmentListItem = ({ assignment }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">
                <Link
                    to={`/assignments/${assignment._id}`}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus-outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:outline-none"
                >
                    Details
                </Link>
            </td>
            <td className="px-6 py-4">{assignment.studentId}</td>
            <td className="px-6 py-4">{assignment.courseId}</td>
            <td className="px-6 py-4">{assignment.dateGiven}</td>
            <td className="px-6 py-4">{assignment.dateDue}</td>
            <td className="px-6 py-4">{assignment.isComplete}</td>
            <td className="px-6 py-4">{assignment.dateComplete}</td>
            <td className="px-6 py-4">{assignment.pointsPossible}</td>
            <td className="px-6 py-4">{assignment.pointsEarned}</td>
        </tr>
    );
};

export default AssignmentListItem;
